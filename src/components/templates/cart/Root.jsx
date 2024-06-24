import { Center } from '@/components/atoms';
import { Cart } from '@/components/organisms/blocks';

const TemplatesCart = ({ namespace }) => {
  return (
    <Center
      className='min-h-svh w-9/10 max-w-screen-xl sm:pt-[--header-h] 2xl:min-h-bounds'
      component='section'
    >
      <Cart namespace={namespace} />
    </Center>
  );
};

export default TemplatesCart;
