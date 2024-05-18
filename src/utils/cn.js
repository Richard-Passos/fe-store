import { extendTailwindMerge } from 'tailwind-merge';

const cn = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['9/10', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl']
    }
  }
});

export default cn;
