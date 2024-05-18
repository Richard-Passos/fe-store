import { cnv } from '@/utils';

const sheetContentDirections = {
  top: 'inset-x-0 top-0 border-b data-closed:slide-out-to-top data-open:slide-in-from-top',
  bottom:
    'inset-x-0 bottom-0 border-t data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
  left: 'inset-y-0 left-0 w-4/5 max-w-sm border-r data-closed:slide-out-to-left data-open:slide-in-from-left',
  right:
    'inset-y-0 right-0 w-4/5 max-w-sm border-l data-closed:slide-out-to-right data-open:slide-in-from-right'
};

const sheetContent = cnv({
  base: 'fixed z-50 flex max-h-svh flex-col overflow-y-auto bg-main p-md shadow-lg ease-in-out data-closed:duration-300 data-closed:animate-out data-open:duration-500 data-open:animate-in',
  variants: {
    dir: sheetContentDirections
  },
  defaultVariants: {
    dir: 'right'
  }
});

const sheetOverlay = cnv({
  base: 'fixed inset-0 z-50 bg-main/50 data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in dark:bg-main/75'
});

export { sheetContent, sheetContentDirections, sheetOverlay };
