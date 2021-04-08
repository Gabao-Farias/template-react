import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Colors } from '../utils';

type ThemeData = {
  theme: ColorTheme;
  themeChoice: ThemeChoiceOnly;
  handleChangeThemeChoice(choice: ThemeChoiceOnly): void;
};

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState<ThemeChoiceOnly>('light');
  const [theme, setTheme] = useState<ColorTheme>(Colors[themeChoice]);

  const handleChangeThemeChoice = (choice: ThemeChoiceOnly) => {
    setThemeChoice(choice);
    setTheme(Colors[choice]);
  };

  return (
    <ThemeContext.Provider
      value={{ handleChangeThemeChoice, theme, themeChoice }}
    >
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
