import { SET_PARTIES } from '../types';

const partiesReducer = (
  state = {
    parties: [],
  },
  action
) => {
  if (action.type === SET_PARTIES)
    return {
      ...state,
      parties: action.payload,
    };
  return state;
};

export default partiesReducer;
