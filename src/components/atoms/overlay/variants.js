import { cnv } from '@/utils';

const overlay = cnv({
  base: 'fixed inset-0 z-50 bg-main bg-opacity-50 data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in',
  compoundVariants: [
    {
      color: ['main', 'muted'],
      className: 'bg-content dark:bg-main/75'
    },
    {
      color: ['inverted'],
      className: 'dark:bg-content/75'
    }
  ]
});

export default overlay;
export { overlay };
