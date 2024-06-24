import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { FilterCatalogProvider } from '@/contexts';

const MoleculesFilterCatalog = forwardRef(({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
});
MoleculesFilterCatalog.displayName = 'MoleculesFilterCatalog';

const MoleculesFilterCatalogWithProvider = ({ items, url, ...props }, ref) => {
  return (
    <FilterCatalogProvider
      items={items}
      url={url}
    >
      <MoleculesFilterCatalog
        ref={ref}
        {...props}
      />
    </FilterCatalogProvider>
  );
};

export default forwardRef(MoleculesFilterCatalogWithProvider);
