import React, { useState, createContext, useContext, useEffect } from 'react';

function getInitialColorMode() {
  return {
    theme: 'light',
    primary: '#ECF0F0',
    secundary: '#A4B5B9',
  };
}
export const ThemeContext = createContext(getInitialColorMode());

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colors, rawSetColors] = useState(undefined);
  const setColors = value => {
    rawSetColors(value);
    // Persist it on update
    window.localStorage.setItem('color', JSON.stringify(value));
  };

  useEffect(() => {
    rawSetColors(getInitialColorMode());
  }, []);
  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
