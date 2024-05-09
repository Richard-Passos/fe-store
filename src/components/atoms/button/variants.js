import colorVariants from '@/components/colorVariants';
import { cnv } from '@/utils';

const buttonTypes = {
    solid: 'bg-main text-content hover:bg-active border-border',
    ghost: 'text-main hover:bg-main/10',
    link: 'text-main'
  },
  buttonSizes = {
    xs: 'h-8 px-2 text-xs',
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg'
  };

const buttonVariants = cnv({
  base: 'inline-flex items-center justify-center rounded-sm border border-transparent text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,transform] focus-visible:outline-main active:scale-[.98] disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: {
      ...colorVariants,
      main: `${colorVariants.main} focus-visible:outline-content`,
      inherit: `${colorVariants.inherit} focus-visible:outline-content`
    },
    type: buttonTypes,
    size: buttonSizes
  },
  defaultVariants: {
    color: 'primary',
    type: 'solid',
    size: 'md'
  }
});

export default buttonVariants;
export { buttonVariants, buttonSizes, buttonTypes };
