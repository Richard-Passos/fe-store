import { cnv } from '@/utils';

const controlVariants = {
    solid: 'bg-main text-content hover:bg-active',
    outline:
      'bg-main text-content border-border hover:border-[hsl(var(--root-content)/calc(var(--border-opacity)*2))]'
  },
  controlSizes = {
    xs: 'h-8 gap-2xs text-xs',
    sm: 'h-10 gap-xs text-sm',
    md: 'h-12 gap-sm text-sm',
    lg: 'h-14 gap-sm'
  };

const control = cnv({
  base: 'group inline-flex w-full cursor-pointer items-center justify-between rounded-sm border border-transparent px-sm font-medium transition-colors [--outline-color:--root-main] placeholder:font-normal placeholder:text-content/75 focus:outline-[--outline-color] disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: controlVariants,
    size: controlSizes
  },
  compoundVariants: [
    {
      color: ['main', 'muted', 'inherit'],
      className: '[--outline-color:--root-content]'
    }
  ],
  defaultVariants: {
    variant: 'outline',
    size: 'md'
  }
});

export default control;
export { control, controlVariants };
