import { cnv } from '@/utils';

const textVariants = {
  p: 'text-opacity-75',
  b: 'font-bold',
  i: 'italic',
  small: 'text-opacity-75 text-xs'
};

const text = cnv({
  base: 'text-content',
  variants: {
    color: {},
    variant: textVariants
  },
  defaultVariants: {
    variant: 'p'
  }
});

export default text;
export { text, textVariants };
