import useCarouselContext from './useCarousel';
import useCartContext from './useCart';
import useDisclosureContext from './useDisclosure';
import useFilterCatalogContext from './useFilterCatalog';
import useFormContext from './useForm';
import useHeaderContext from './useHeader';
import useToggleContext from './useToggle';

const hooksContexts = {
  useCarousel: useCarouselContext,
  useCart: useCartContext,
  useDisclosure: useDisclosureContext,
  useFilterCatalog: useFilterCatalogContext,
  useForm: useFormContext,
  useHeader: useHeaderContext,
  useToggle: useToggleContext
};

export default hooksContexts;
export {
  hooksContexts,
  useCarouselContext,
  useCartContext,
  useDisclosureContext,
  useFilterCatalogContext,
  useFormContext,
  useHeaderContext,
  useToggleContext
};
