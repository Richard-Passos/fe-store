import { cnv } from '@/utils';

const scrollAreaScrollbarOrientations = {
  vertical: 'h-full w-2.5',
  horizontal: 'h-2.5 flex-col'
};

const scrollAreaScrollbar = cnv({
  base: 'flex touch-none select-none bg-active p-0.5',
  variants: {
    orientation: scrollAreaScrollbarOrientations
  },
  defaultVariants: {
    orientation: 'vertical'
  }
});

export { scrollAreaScrollbar, scrollAreaScrollbarOrientations };
