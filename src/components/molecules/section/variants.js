import { cnv } from '@/utils';

const sectionVariants = {
    default:
      'py-[--py] [--py:theme(spacing.2xl)] min-h-screen 2xl:min-h-bounds',
    solid: 'rounded-lg p-lg sm:p-xl my-xl border',
    slot: 'h-fit'
  },
  sectionSizes = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'w-full'
  };

const section = cnv({
  base: 'relative isolate flex w-9/10 flex-col items-center justify-center bg-main',
  variants: {
    variant: sectionVariants,
    size: sectionSizes
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg'
  }
});

export default section;
export { section, sectionVariants, sectionSizes };
