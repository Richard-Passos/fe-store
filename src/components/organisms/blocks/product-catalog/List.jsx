'use client';

import { forwardRef } from 'react';

import { FilterCatalogList } from '@/components/molecules/filter-catalog';
import { cn } from '@/utils';

import { ProductCard } from '../../cards';

const OrganismsBlocksProductCatalogList = ({ className, ...props }, ref) => {
  return (
    <FilterCatalogList
      className={cn(
        'my-0 flex flex-wrap justify-center gap-lg px-0',
        className
      )}
      ref={ref}
      {...props}
    >
      {(data) => (
        <ProductCard
          data={data}
          key={data.id}
        />
      )}
    </FilterCatalogList>
  );
};

export default forwardRef(OrganismsBlocksProductCatalogList);
