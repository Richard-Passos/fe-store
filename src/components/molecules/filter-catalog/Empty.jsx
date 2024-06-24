'use client';

import { forwardRef } from 'react';

import { useFilterCatalogContext } from '@/hooks/contexts';

const MoleculesFilterCatalogEmpty = ({ className, ...props }, ref) => {
  const { isEmpty } = useFilterCatalogContext();

  const Tag = asChild ? Slot : 'div';

  if (!isEmpty) return null;

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesFilterCatalogEmpty);
