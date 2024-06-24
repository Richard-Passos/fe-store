import { Center } from '@/components/atoms';
import { About } from '@/components/organisms/blocks';

const TemplatesAbout = ({ namespace }) => {
  return (
    <Center
      className='min-h-svh w-9/10 max-w-screen-xl sm:pt-[--header-h] 2xl:min-h-bounds'
      component='section'
    >
      <About namespace={namespace} />
    </Center>
  );
};

export default TemplatesAbout;
