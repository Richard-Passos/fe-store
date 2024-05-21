'use client';

import { ThemeProvider } from 'next-themes';

const GlobalThemeProvider = (props) => {
  return (
    <ThemeProvider
      attribute='class'
      disableTransitionOnChange
      {...props}
    />
  );
};

export default GlobalThemeProvider;
