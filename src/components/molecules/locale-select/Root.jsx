'use client';

import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { Select } from '@/components/atoms';
import { useLocale } from '@/hooks';
import { usePathname, useRouter } from '@/navigation';

const MoleculesLocaleSelect = (props, ref) => {
  const locale = useLocale(),
    router = useRouter(),
    pathname = usePathname(),
    searchParams = useSearchParams();

  return (
    <Select
      allowDeselect={false}
      defaultValue={locale}
      ref={ref}
      {...props}
      onChange={(value, options) => {
        router.replace(`${pathname}?${searchParams}`, { locale: value });

        props.onChange?.(value, options);
      }}
    />
  );
};

export default forwardRef(MoleculesLocaleSelect);
