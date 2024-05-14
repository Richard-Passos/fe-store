import { cnv } from '@/utils';

const toggleVariants = {
    solid:
      'bg-inverted/80 text-inverted-content hover:bg-inverted/90 data-[state=on]:bg-inverted',
    ghost: 'text-inverted hover:bg-inverted/10 data-[state=on]:bg-inverted/20',
    outline:
      'text-inverted border-inverted/10 hover:border-transparent hover:bg-inverted/10 data-[state=on]:border-transparent data-[state=on]:bg-inverted/20'
  },
  toggleSizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

const toggle = cnv({
  base: 'inline-flex aspect-square items-center justify-center rounded-sm border border-transparent text-sm font-medium transition-all active:scale-[.98] disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: toggleVariants,
    size: toggleSizes
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md'
  }
});

export default toggle;
export { toggle, toggleSizes, toggleVariants };
