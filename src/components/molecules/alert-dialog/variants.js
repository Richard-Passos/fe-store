import { cnv } from '@/utils';

const alertDialogContentVariants = cnv({
  base: 'fixed left-1/2 top-1/2 z-50 flex max-h-screen w-full max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-md border bg-main p-sm text-content shadow-lg data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-closed:slide-out-to-left-1/2 data-closed:slide-out-to-top-[48%] data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-open:slide-in-from-left-1/2 data-open:slide-in-from-top-[48%]'
});

const alertDialogOverlayVariants = cnv({
  base: 'fixed inset-0 z-50 bg-main/50 data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in dark:bg-main/75'
});

export { alertDialogContentVariants, alertDialogOverlayVariants };
