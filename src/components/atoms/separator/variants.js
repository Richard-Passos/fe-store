import { cnv } from '@/utils';

const separatorOrientations = {
  horizontal: 'h-px w-full',
  vertical: 'h-full w-px'
};

const separator = cnv({
  base: 'shrink-0 bg-border',
  variants: {
    orientation: separatorOrientations
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});

export default separator;
export { separator, separatorOrientations };
