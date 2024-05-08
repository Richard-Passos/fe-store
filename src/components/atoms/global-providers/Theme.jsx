'use client';

import { ThemeProvider } from 'next-themes'

const GlobalThemeProvider = (props) => {
  return (
    <ThemeProvider
        disableTransitionOnChange
        themes={['light', 'dark']}
        attribute='class'
        {...props}
    />
  );
};

export default GlobalThemeProvider;
