'use client';

import { forwardRef } from 'react';

import { useFilterCatalogContext } from '@/hooks/contexts';

const MoleculesFilterCatalogList = (
  { component = 'ul', children, ...props },
  ref
) => {
  const { items } = useFilterCatalogContext();
 
  const Tag = component;

  if (!items.length) return null;

  return (
    <Tag
      ref={ref}
      {...props}
    >
      {items.map(children)}
    </Tag>
  );
};

export default forwardRef(MoleculesFilterCatalogList);
