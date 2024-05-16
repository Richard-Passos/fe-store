import { cnv } from '@/utils';

const alertDialogOverlay = cnv({
  base: 'fixed inset-0 z-50 bg-main/50 data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in dark:bg-main/75'
});

export { alertDialogOverlay };
