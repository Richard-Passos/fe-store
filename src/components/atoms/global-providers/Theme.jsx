'use client';

import { ThemeProvider } from 'next-themes';

const GlobalThemeProvider = (props) => {
  return (
    <ThemeProvider
      attribute='class'
      disableTransitionOnChange
      themes={['light', 'dark']}
      {...props}
    />
  );
};

export default GlobalThemeProvider;
