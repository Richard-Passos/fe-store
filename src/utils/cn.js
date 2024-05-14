import { extendTailwindMerge } from 'tailwind-merge';

const cn = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['9/10', 'xs', 'sm', 'md', 'lg']
    }
  }
});

export default cn;
