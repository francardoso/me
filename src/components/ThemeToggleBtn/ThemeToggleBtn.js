import React from 'react';

import Icon from '../Icon';
import { useThemeContext } from '../../libs/ThemeContext';

import Container from './styles';

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useThemeContext();
  const changeThemeColors = () => {
    const newTheme =
      theme.name === 'light'
        ? {
            name: 'dark',
            pimary: '#000',
            secundary: '#000',
          }
        : {
            name: 'light',
            primary: '#ECF0F0',
            secundary: '#A4B5B9',
          };
    setTheme(newTheme);
  };
  return (
    <Container type="button" onClick={changeThemeColors}>
      <Icon icon="faSun" />
    </Container>
  );
};

export default ThemeToggleBtn;
