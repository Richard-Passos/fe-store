import colors from '@/components/colors';
import { cnv } from '@/utils';

const icon = cnv({
  base: 'size-full *:fill-main',
  variants: {
    color: { ...colors, current: '[--root-main]' }
  },
  compoundVariants: [
    {
      color: 'current',
      className: '*:fill-current'
    }
  ],
  defaultVariants: {
    color: 'current'
  }
});

export default icon;
export { icon };
