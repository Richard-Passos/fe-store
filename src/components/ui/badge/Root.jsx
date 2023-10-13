import { cn, cnv, variantsColor } from '@/utils';

const Badge = ({ variants, className, ...props }) => {
  return (
    <div
      aria-label='Badge'
      className={cn(badgeVariants(variants), className)}
      {...props}
    />
  );
};

const badgeVariants = cnv({
  base: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold',
  variants: {
    color: variantsColor,
    variant: {
      filled: 'bg-main text-content',
      outline: 'border-main text-main',
      ghost: 'bg-main/20 text-main',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
  },
});

export default Badge;
export { badgeVariants };
