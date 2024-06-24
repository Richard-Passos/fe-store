'use client';

import { forwardRef } from 'react';

import { useFilterCatalogContext } from '@/hooks/contexts';

const MoleculesFilterCatalogLatPage = ({ className, ...props }, ref) => {
  const { isLastPage } = useFilterCatalogContext();

  const Tag = asChild ? Slot : 'div';

  if (!isLastPage) return null;

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesFilterCatalogLatPage);
