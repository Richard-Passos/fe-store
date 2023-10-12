import { cn, cnv } from '@/utils';

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
  base: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors',
  variants: {
    color: {
      primary: '[--base:--primary] [--content:--primary-c]',
      secondary: '[--base:--secondary] [--content:--secondary-c]',
      accent: '[--base:--accent] [--content:--accent-c]',
      danger: '[--base:--danger] [--content:--danger-c]',
      base: '[--base] [--content]',
    },
    variant: {
      filled: 'bg-base text-content',
      outline: 'border-base text-base',
      ghost: 'bg-base/20 text-content',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
  },
});

export default Badge;
export { badgeVariants };
