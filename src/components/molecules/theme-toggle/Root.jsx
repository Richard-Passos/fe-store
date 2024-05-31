'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useEffect } from 'react';

import { ToggleProvider } from '@/contexts';
import { useColorScheme, useComputedColorScheme } from '@/hooks';
import { useToggleContext } from '@/hooks/contexts';
import { cn } from '@/utils';

const MoleculesThemeToggle = forwardRef(
  ({ asChild, className, ...props }, ref) => {
    const { toggle, nextValue } = useToggleContext(),
      { setColorScheme } = useColorScheme(),
      theme = useComputedColorScheme();

    const Tag = asChild ? Slot : 'button';

    useEffect(() => {
      toggle(theme);
    }, [toggle, theme]);

    return (
      <Tag
        className={cn('relative', className)}
        ref={ref}
        {...props}
        onClick={(ev) => {
          toggle();

          setColorScheme(nextValue);

          props.onClick?.(ev);
        }}
      />
    );
  }
);
MoleculesThemeToggle.displayName = 'MoleculesThemeToggle';

const MoleculesThemeToggleWithPovider = ({ values, ...props }, ref) => {
  return (
    <ToggleProvider values={values}>
      <MoleculesThemeToggle
        ref={ref}
        {...props}
      />
    </ToggleProvider>
  );
};

export default forwardRef(MoleculesThemeToggleWithPovider);
