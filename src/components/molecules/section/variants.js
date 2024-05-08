import { cnv } from '@/utils';

const sectionTypes = {
    default: 'py-lg min-h-screen 2xl:min-h-bounds',
    solid: 'rounded-lg p-sm sm:p-md my-md border',
    slot: 'h-fit'
  },
  sectionSizes = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'w-full'
  };

const sectionVariants = cnv({
  base: 'relative isolate flex w-9/10 flex-col items-center justify-center bg-main',
  variants: {
    type: sectionTypes,
    size: sectionSizes
  },
  defaultVariants: {
    type: 'default',
    size: 'lg'
  }
});

export default sectionVariants;
export { sectionVariants };
