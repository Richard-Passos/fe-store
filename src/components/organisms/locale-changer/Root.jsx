'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { SelectRoot } from '@/components/molecules/select';
import { usePathname, useRouter } from '@/navigation';

const LocaleChangerRoot = (props, ref) => {
  const activeLocale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <SelectRoot
      ref={ref}
      value={activeLocale}
      {...props}
      onValueChange={(locale) => {
        router.replace(`${pathname}?${searchParams}`, { locale });

        props.onValueChange?.(locale);
      }}
    />
  );
};

export default forwardRef(LocaleChangerRoot);
