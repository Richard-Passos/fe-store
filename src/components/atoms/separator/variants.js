import { cnv } from '@/utils';

const separatorOrientations = {
  horizontal: 'h-px w-full -mx-1 my-1',
  vertical: 'h-full w-px mx-1 my-1'
};

const separator = cnv({
  base: 'bg-border',
  variants: {
    orientation: separatorOrientations
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});

export default separator;
export { separator, separatorOrientations };
