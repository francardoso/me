import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

import Icon from '../Icon';
import { useThemeContext } from '../../libs/ThemeContext';
import getTheme from '../../libs/getTheme';

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useThemeContext();
  const changeThemeColors = () => {
    const newTheme =
      theme.name === 'light' ? getTheme('dark') : getTheme('light');
    setTheme(newTheme);
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={theme.name !== 'light'}
          onChange={changeThemeColors}
          name="switchTheme"
          inputProps={{ 'aria-label': 'Change Theme' }}
          color={theme?.primary?.background}
        />
      }
      label={
        <Icon icon={theme.name === 'light' ? 'faMoon' : 'faSun'} size="2x" />
      }
      labelPlacement="top"
    />
  );
};

export default ThemeToggleBtn;
