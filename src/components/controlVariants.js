import { cnv } from '@/utils';

const controlVariants = {
  solid: 'bg-main text-content hover:bg-active',
  outline:
    'bg-main text-content border-border hover:border-[hsl(var(--root-content)/calc(var(--border-opacity)*2))]'
};

const control = cnv({
  base: 'group inline-flex h-12 w-full cursor-pointer rounded-sm border border-transparent px-4 text-sm transition-colors placeholder:text-content/75 focus:outline-main disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: controlVariants
  },
  compoundVariants: [
    {
      color: ['main', 'muted', 'inherit'],
      className: 'focus:outline-content'
    }
  ],
  defaultVariants: {
    variant: 'outline'
  }
});

export default control;
export { control, controlVariants };
