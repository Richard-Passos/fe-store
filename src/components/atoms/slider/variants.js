import { cnv } from '@/utils';

const sliderDirections = {
  horizontal: 'h-5 w-full',
  vertical: 'h-full w-5 flex-col',
};

const sliderVariants = cnv({
  base: 'relative flex touch-none select-none items-center data-disabled:cursor-not-allowed data-disabled:opacity-50',
  variants: {
    dir: sliderDirections,
  },
  defaultVariants: {
    dir: 'horizontal',
  },
});

export default sliderVariants
export { sliderVariants, sliderDirections };