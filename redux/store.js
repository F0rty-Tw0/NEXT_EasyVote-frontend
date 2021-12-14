import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from 'redux/reducers';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    // preserve the user state on client side navigation
    if (state.user.user?.id) nextState.user.user = state.user.user;
    if (state.loggedUser.loggedUser?.id)
      nextState.loggedUser.loggedUser = state.loggedUser.loggedUser;
    if (state.parties.parties.length > 0)
      nextState.parties.parties = state.parties.parties;
    return nextState;
  } else {
    return allReducers(state, action);
  }
};

const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

const wrapper = createWrapper(makeStore);
export default wrapper;
