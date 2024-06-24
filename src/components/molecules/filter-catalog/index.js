import FilterCatalogEmpty from './Empty';
import FilterCatalogFilter from './Filter';
import FilterCatalogLastPage from './LastPage';
import FilterCatalogList from './List';
import FilterCatalogLoadMore from './LoadMore';
import FilterCatalogRoot from './Root';

const FilterCatalog = {
  Root: FilterCatalogRoot,
  Empty: FilterCatalogEmpty,
  Filter: FilterCatalogFilter,
  LastPage: FilterCatalogLastPage,
  List: FilterCatalogList,
  LoadMore: FilterCatalogLoadMore
};

export default FilterCatalog;
export {
  FilterCatalog,
  FilterCatalogRoot,
  FilterCatalogEmpty,
  FilterCatalogFilter,
  FilterCatalogLastPage,
  FilterCatalogList,
  FilterCatalogLoadMore
};
