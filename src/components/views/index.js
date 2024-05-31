import ErrorView from './error';
import HomeView from './home';
import NotFoundView from './not-found';
import SingleProductView from './single-product';

const Views = {
  Error: ErrorView,
  Home: HomeView,
  NotFound: NotFoundView,
  SingleProduct: SingleProductView
};

export default Views;
export { Views, ErrorView, HomeView, NotFoundView, SingleProductView };
