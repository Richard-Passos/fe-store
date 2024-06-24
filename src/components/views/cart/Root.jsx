import { CartTemplate } from '@/components/templates';

const ViewsCart = (props) => {
  return (
    <CartTemplate
      namespace='pages.cart'
      {...props}
    />
  );
};

export default ViewsCart;
