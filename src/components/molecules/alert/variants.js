import colorVariants from '@/components/colorVariants';
import { cnv } from '@/utils';

const alertTypes = {
  solid: 'bg-main text-content',
  outline: 'border-main text-main'
};

const alertVariants = cnv({
  base: 'relative w-full max-w-md rounded-md border border-transparent p-5',
  variants: {
    color: colorVariants,
    type: alertTypes
  },
  defaultVariants: {
    color: 'main',
    type: 'solid'
  }
});

export default alertVariants;
export { alertVariants, alertTypes };
