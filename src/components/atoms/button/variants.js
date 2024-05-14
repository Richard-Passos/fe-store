import { cnv } from '@/utils';

const buttonVariants = {
    solid: 'bg-main text-content border-border hover:bg-active',
    ghost: 'text-main hover:bg-main/10',
    link: 'text-main hover:underline underline-offset-4'
  },
  buttonSizes = {
    xs: 'h-8 px-2 text-xs',
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg'
  };

const button = cnv({
  base: 'relative inline-flex items-center justify-center rounded-sm border border-transparent text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,transform] focus-visible:outline-main active:scale-[.98] disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: buttonVariants,
    size: buttonSizes
  },
  compoundVariants: [
    {
      color: ['main', 'inherit'],
      variant: 'ghost',
      className: 'text-content hover:bg-active'
    },
    {
      color: ['main', 'inherit'],
      variant: 'link',
      className: 'text-content'
    },
    {
      color: ['main', 'muted', 'inherit'],
      className: 'focus-visible:outline-content'
    }
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md'
  }
});

export default button;
export { button, buttonSizes, buttonVariants };
