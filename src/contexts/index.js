import CarouselContext, { CarouselProvider } from './Carousel';
import DisclosureContext, { DisclosureProvider } from './Disclosure';
import FilterCatalogContext, { FilterCatalogProvider } from './FilterCatalog';
import { FormProvider } from './Form';
import ToggleContext, { ToggleProvider } from './Toggle';

const Contexts = {
  Carousel: CarouselContext,
  Disclosure: DisclosureContext,
  FilterCatalog: FilterCatalogContext,
  Toggle: ToggleContext
};

export default Contexts;
export {
  Contexts,
  CarouselContext,
  CarouselProvider,
  DisclosureContext,
  DisclosureProvider,
  FilterCatalogContext,
  FilterCatalogProvider,
  FormProvider,
  ToggleContext,
  ToggleProvider
};
