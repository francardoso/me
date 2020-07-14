import React from 'react';

import Icon from '../Icon';
import { useThemeContext } from '../../libs/ThemeContext';

import Container from './styles';

const ThemeToggleBtn = () => {
  const { setColors, colors } = useThemeContext();
  const changeThemeColors = () => {
    const newTheme =
      colors.theme === 'light'
        ? {
            theme: 'dark',
            pimary: '#000',
            secundary: '#000',
          }
        : {
            theme: 'light',
            primary: '#ECF0F0',
            secundary: '#A4B5B9',
          };
    setColors(newTheme);
  };
  return (
    <Container type="button" onClick={changeThemeColors} themeColors={colors}>
      <Icon icon="faSun" />
    </Container>
  );
};

export default ThemeToggleBtn;
