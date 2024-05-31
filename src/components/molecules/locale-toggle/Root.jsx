'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSearchParams } from 'next/navigation';
import { forwardRef, useEffect } from 'react';

import { ToggleProvider } from '@/contexts';
import { useLocale } from '@/hooks';
import { useToggleContext } from '@/hooks/contexts';
import { usePathname, useRouter } from '@/navigation';
import { cn } from '@/utils';

const MoleculesLocaleToggle = forwardRef(
  ({ asChild, className, ...props }, ref) => {
    const { toggle, nextValue } = useToggleContext(),
      locale = useLocale(),
      router = useRouter(),
      pathname = usePathname(),
      searchParams = useSearchParams();

    const Tag = asChild ? Slot : 'button';

    useEffect(() => {
      toggle(locale);
    }, [toggle, locale]);

    return (
      <Tag
        className={cn('relative', className)}
        ref={ref}
        {...props}
        onClick={(ev) => {
          toggle();

          router.replace(`${pathname}?${searchParams}`, { locale: nextValue });

          props.onClick?.(ev);
        }}
      />
    );
  }
);
MoleculesLocaleToggle.displayName = 'MoleculesLocaleToggle';

const MoleculesLocaleToggleWithPovider = ({ values, ...props }, ref) => {
  return (
    <ToggleProvider values={values}>
      <MoleculesLocaleToggle
        ref={ref}
        {...props}
      />
    </ToggleProvider>
  );
};

export default forwardRef(MoleculesLocaleToggleWithPovider);
