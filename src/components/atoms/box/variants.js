import { cnv } from '@/utils';

const boxTypes = {
  solid: 'bg-main text-content border-border shadow-md dark:shadow-none',
  clean: 'text-content'
};

const boxVariants = cnv({
  base: 'relative flex flex-col rounded-md border border-transparent p-sm',
  variants: {
    type: boxTypes
  },
  defaultVariants: {
    type: 'solid'
  }
});

export default boxVariants;
export { boxVariants, boxTypes };
