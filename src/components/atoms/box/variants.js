import { cnv } from '@/utils';

const boxVariants = {
  solid: 'bg-main text-content border-border shadow-md dark:shadow-none',
  clean: 'text-content'
};

const box = cnv({
  base: 'relative flex flex-col rounded-md border border-transparent p-sm',
  variants: {
    variant: boxVariants
  },
  defaultVariants: {
    variant: 'solid'
  }
});

export default box;
export { box, boxVariants };
