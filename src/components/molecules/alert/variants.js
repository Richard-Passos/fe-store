import { cnv } from '@/utils';

const alertTypes = {
  solid: 'bg-main text-content border-border',
  outline: 'border-main text-main'
};

const alertVariants = cnv({
  base: 'relative w-full max-w-md rounded-md border border-transparent p-sm',
  variants: {
    type: alertTypes
  },
  defaultVariants: {
    type: 'solid'
  }
});

export default alertVariants;
export { alertVariants, alertTypes };
