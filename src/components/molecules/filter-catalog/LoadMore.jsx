'use client';

import { Slot } from '@radix-ui/react-slot';
import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';

import { useFilterCatalogContext } from '@/hooks/contexts';

const MoleculesFilterCatalogLoadMore = ({ url = '', ...props }, ref) => {
  const { page, isLastPage } = useFilterCatalogContext(),
    setSearchParams = useSearchParams();

  const Tag = asChild ? Slot : 'button';

  if (isLastPage) return null;

  return (
    <Tag
      ref={ref}
      {...props}
      onClick={async (ev) => {
        setSearchParams({ page: page + 1 });

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(MoleculesFilterCatalogLoadMore);
