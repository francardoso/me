import React from 'react';

import Icon from '../Icon';
import { useThemeContext } from '../../libs/ThemeContext';
import getTheme from '../../libs/getTheme';

import Container from './styles';

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useThemeContext();
  const changeThemeColors = () => {
    const newTheme =
      theme.name === 'light' ? getTheme('dark') : getTheme('light');
    setTheme(newTheme);
  };
  return (
    <Container type="button" onClick={changeThemeColors}>
      <Icon icon="faSun" />
    </Container>
  );
};

export default ThemeToggleBtn;
