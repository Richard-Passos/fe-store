import { cnv } from '@/utils';

const badgeTypes = {
  solid: 'bg-main text-content border-border',
  ghost: 'bg-main/10 text-main'
};

const badgeVariants = cnv({
  base: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-1 text-xs font-semibold',
  variants: {
    type: badgeTypes
  },
  defaultVariants: {
    color: 'primary',
    type: 'solid'
  }
});

export default badgeVariants;
export { badgeVariants, badgeTypes };
