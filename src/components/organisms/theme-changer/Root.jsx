'use client';

import { useTheme } from 'next-themes';
import { forwardRef } from 'react';

import { SelectRoot } from '@/components/molecules/select';
import { useIsMounted } from '@/hooks';

const ThemeChangerRoot = (props, ref) => {
  const { theme, setTheme } = useTheme(),
    { isMounted } = useIsMounted();

  if (!isMounted) return null;

  return (
    <SelectRoot
      ref={ref}
      value={theme}
      {...props}
      onValueChange={(theme) => {
        setTheme(theme);

        props.onValueChange?.(theme);
      }}
    />
  );
};

export default forwardRef(ThemeChangerRoot);
