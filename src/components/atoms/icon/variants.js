import colors from '@/components/colors';
import { cnv } from '@/utils';

const icon = cnv({
  base: 'size-full *:fill-main',
  variants: {
    color: { ...colors, current: '[--root-main:currentColor]' }
  },
  defaultVariants: {
    color: 'current'
  }
});

export default icon;
export { icon };
