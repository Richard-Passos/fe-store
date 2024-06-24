import { getLocale } from 'next-intl/server';
import { forwardRef } from 'react';

import { FilterCatalog } from '@/components/molecules';
import { cn } from '@/utils';

import List from './List';
import Title from './Title';

const OrganismsBlocksProductCatalog = async (
  { namespace, className, ...props },
  ref
) => {
  const locale = await getLocale();

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?locale=${locale}`;

  const res = await fetch(url, { cache: 'no-store' });

  const items = (await res.json()).data ?? [];

  return (
    <FilterCatalog.Root
      className={cn(
        'mb-xl flex w-9/10 max-w-screen-xl flex-col items-center gap-xl py-xl',
        className
      )}
      id='product-catalog'
      items={items}
      ref={ref}
      url={url}
      {...props}
    >
      <Title namespace={namespace} />

      <List className='mt-xl' />
    </FilterCatalog.Root>
  );
};

export default forwardRef(OrganismsBlocksProductCatalog);
