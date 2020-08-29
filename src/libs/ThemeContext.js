import React, { useState, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import getTheme from './getTheme';

function getInitialTheme() {
  return getTheme('light');
}
export const ThemeContext = createContext(getInitialTheme());

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState({});
  const setTheme = value => {
    rawSetTheme(value);
    // Persist it on update
    window.localStorage.setItem('color', JSON.stringify(value));
  };
  useEffect(() => {
    rawSetTheme(getInitialTheme());
  }, []);

  return (
    <ThemeContext.Provider
      setTheme={setTheme}
      theme={theme}
      value={{ setTheme, theme }}
    >
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
