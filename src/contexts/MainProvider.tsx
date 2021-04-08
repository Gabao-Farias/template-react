import React from 'react';
import { ThemeProvider } from './index';

export const MainProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
