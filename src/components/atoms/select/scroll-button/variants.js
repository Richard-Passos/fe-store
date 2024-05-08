import { cnv } from '@/utils';

const selectScrollButtonVariants = cnv({
  base: 'absolute z-10 flex h-6 w-full cursor-default items-center justify-center bg-content/75',
  variants: {
    dir: {
      down: 'bottom-0 border-t',
      up: 'top-0 border-b'
    }
  },
  defaultVariants: {
    dir: 'down'
  }
});

export default selectScrollButtonVariants;
export { selectScrollButtonVariants };
