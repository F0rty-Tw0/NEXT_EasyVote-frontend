import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  if (!mounted) return null;

  return (
    <div>
      <label className='label'>
        <div className='toggle'>
          <input
            className='toggle-state'
            type='checkbox'
            name='check'
            value='check'
            onChange={toggleTheme}
          />
          <div className='indicator'></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeChanger;
