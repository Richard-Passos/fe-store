import { cnv } from '@/utils';

const controlVariants = {
    solid: 'bg-main text-content hover:bg-active',
    outline:
      'bg-main text-content border-border hover:border-[hsl(var(--root-content)/calc(var(--border-opacity)*2))]'
  },
  controlSizes = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14'
  };

const control = cnv({
  base: 'group inline-flex w-full cursor-pointer items-center justify-between rounded-sm border border-transparent px-4 text-sm font-medium transition-colors placeholder:font-normal placeholder:text-content/75 focus:outline-main disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: controlVariants,
    size: controlSizes
  },
  compoundVariants: [
    {
      color: ['main', 'muted', 'inherit'],
      className: 'focus:outline-content'
    }
  ],
  defaultVariants: {
    variant: 'outline',
    size: 'md'
  }
});

export default control;
export { control, controlVariants };
