import { cn, cnva } from '@/utils';

const Badge = ({ variants, className, ...props }) => {
  return (
    <div
      aria-label='Badge'
      className={cn(badgeVariants(variants), className)}
      {...props}
    />
  );
};

const badgeVariants = cnva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export default Badge;
export { badgeVariants };
