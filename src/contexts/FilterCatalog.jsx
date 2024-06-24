'use client';

import { createContext } from 'react';

import { useFetch, useId, useQueryString } from '@/hooks';

const DEFAULTS = {
  id: '',
  items: [],
  page: 1,
  perPage: 10,
  totalPages: 0,
  totalResults: 0,
  isLoading: false,
  isLastPage: false,
  isEmpty: false
};

const FilterCatalogContext = createContext(DEFAULTS);

const FilterCatalogProvider = ({ items = [], url = '', value, ...props }) => {
  const id = useId(),
    queryStr = useQueryString();

  const [pathname = '', query = ''] = url.split('?');

  const { data: res, loading: isLoading } = useFetch(
    pathname + `${queryStr}&${query}`
  );

  const { data = [], meta = {} } = res ?? {};

  items = data ?? items;

  const isLastPage = meta.page >= meta.totalPages,
    isEmpty = !!items.length;

  return (
    <FilterCatalogContext.Provider
      value={{
        id,
        items,
        isLoading,
        isLastPage,
        isEmpty,
        ...meta,
        ...value
      }}
      {...props}
    />
  );
};

export default FilterCatalogContext;
export { FilterCatalogProvider };
