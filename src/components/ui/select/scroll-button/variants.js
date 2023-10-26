import { cnv } from '@/utils';

const scrollButtonVariants = cnv({
  base: 'absolute z-10 flex h-6 w-full cursor-default items-center justify-center bg-main/75 p-1 backdrop-blur-sm',
  variants: {
    side: {
      down: 'bottom-0 border-t',
      up: 'top-0 border-b',
    },
  },
  defaultVariants: {
    side: 'down',
  },
});

export default scrollButtonVariants;
