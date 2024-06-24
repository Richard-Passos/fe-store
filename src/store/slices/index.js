import cartSlice from './cart';
import headerSlice from './header';

const slices = {
  cart: cartSlice,
  header: headerSlice
};

export default slices;
export { slices, cartSlice, headerSlice };
