'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { useSetSearchParams } from '@/hooks';
import { normId } from '@/utils';

const MoleculesFilterCatalogFilter = (
  { query = {}, asChild, ...props },
  ref
) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const { name, value } = { name: normId(query.name), value: query.value };

  const isActive = searchParams.get(name) === value;

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      data-state={isActive ? 'active' : 'inactive'}
      ref={ref}
      {...props}
      onClick={(ev) => {
        setSearchParams({ [name]: !isActive ? value : '' });

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(MoleculesFilterCatalogFilter);
