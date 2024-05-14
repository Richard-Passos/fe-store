import { cnv } from '@/utils';

const badgeVariants = {
  solid: 'bg-main text-content border-border',
  ghost: 'bg-main/10 text-main'
};

const badge = cnv({
  base: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-1 text-xs font-semibold',
  variants: {
    variant: badgeVariants
  },
  defaultVariants: {
    color: 'primary',
    variant: 'solid'
  }
});

export default badge;
export { badge, badgeVariants };
