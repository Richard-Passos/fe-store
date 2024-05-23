import { cnv } from '@/utils';

const buttonVariants = {
    solid: 'bg-main text-content border-border hover:bg-active',
    ghost: 'text-main hover:bg-main/10',
    link: 'text-main hover:underline underline-offset-4'
  },
  buttonSizes = {
    xs: 'h-8 px-xs gap-2xs text-xs',
    sm: 'h-10 px-sm gap-xs text-sm',
    md: 'h-12 px-sm gap-sm text-sm',
    lg: 'h-14 px-md gap-sm'
  };

const button = cnv({
   base: 'relative inline-flex items-center justify-center rounded-sm border border-transparent text-center font-medium transition-colors [--outline-color:theme(colors.main)] first-letter:uppercase focus-visible:outline-[--outline-color] disabled:pointer-events-none disabled:opacity-50 [&:has(>svg:only-child)]:aspect-square [&:has(>svg:only-child)]:px-0',
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
      className: '[--outline-color:theme(colors.content)]'
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
