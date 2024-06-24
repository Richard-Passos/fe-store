import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Button, Title } from '@/components/atoms';
import { FilterCatalogFilter } from '@/components/molecules/filter-catalog';
import { cn } from '@/utils';

const OrganismsBlocksProductCatalogTitle = (
  { namespace, className, ...props },
  ref
) => {
  const t = useTranslations(namespace);

  return (
    <Title
      className={cn(
        'group text-center *:has-[[data-state=active]]:opacity-50 sm:whitespace-pre-wrap',
        className
      )}
      order={2}
      ref={ref}
      {...props}
    >
      {t.rich('title', {
        layerFilter: (chunks) => (
          <OrganismsBlocFilkProductCatalogTitleFilter
            query={{ name: 'type', value: 'layer' }}
          >
            {chunks}
          </OrganismsBlocFilkProductCatalogTitleFilter>
        ),
        componentFilter: (chunks) => (
          <OrganismsBlocFilkProductCatalogTitleFilter
            query={{ name: 'type', value: 'component' }}
          >
            {chunks}
          </OrganismsBlocFilkProductCatalogTitleFilter>
        ),
        span: (chunks) => (
          <span className='transition-opacity group-hover:opacity-50'>
            {chunks}
          </span>
        )
      })}
    </Title>
  );
};

const OrganismsBlocFilkProductCatalogTitleFilter = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <FilterCatalogFilter
        asChild
        className={cn('data-active:opacity-100', className)}
        ref={ref}
        {...props}
      >
        <Button
          className={cn(
            'h-[1em] overflow-visible rounded-none border-none p-0 text-[1em] text-current underline transition-opacity [font-weight:inherit]',
            className
          )}
          variant='transparent'
        >
          {children}
        </Button>
      </FilterCatalogFilter>
    );
  }
);
OrganismsBlocFilkProductCatalogTitleFilter.displayName =
  'OrganismsBlocFilkProductCatalogTitleFilter';

export default forwardRef(OrganismsBlocksProductCatalogTitle);
