import AboutView from './about';
import CartView from './cart';
import ErrorView from './error';
import HomeView from './home';
import NotFoundView from './not-found';
import SingleProductView from './single-product';

const Views = {
  About: AboutView,
  Cart: CartView,
  Error: ErrorView,
  Home: HomeView,
  NotFound: NotFoundView,
  SingleProduct: SingleProductView
};

export default Views;
export {
  Views,
  AboutView,
  CartView,
  ErrorView,
  HomeView,
  NotFoundView,
  SingleProductView
};
