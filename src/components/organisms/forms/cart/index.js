import { Form } from '@/components/molecules';

import CartFormQuantityInput from './QuantityInput';
import CartFormRemove from './Remove';
import CartFormRemoveAll from './RemoveAll';
import CartFormRoot from './Root';

const CartForm = {
  ...Form,
  Root: CartFormRoot,
  QuantityInput: CartFormQuantityInput,
  Remove: CartFormRemove,
  RemoveAll: CartFormRemoveAll
};

export default CartForm;
export {
  CartForm,
  CartFormRoot,
  CartFormQuantityInput,
  CartFormRemove,
  CartFormRemoveAll
};
