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
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent',
  variants: {
    color: {
      primary: '[--base:--primary] [--content:--primary-c]',
      secondary: '[--base:--secondary] [--content:--secondary-c]',
      danger: '[--base:--danger] [--content:--danger-c]',
      base: '[--base:--base] [--content:--content]',
    },
    variant: {
      filled: 'bg-base text-content hover:bg-base/80',
      outline: 'border-base text-base hover:bg-base hover:text-content',
      ghost: 'text-base hover:bg-base/20 hover:text-content',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
  },
});

export default Badge;
export { badgeVariants };
