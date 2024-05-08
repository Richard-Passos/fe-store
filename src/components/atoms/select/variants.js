import { cnv } from '@/utils';

const selectContentVariants = cnv({
  base: 'relative z-50 max-h-[--radix-select-content-available-height] min-w-[--radix-select-trigger-width] overflow-hidden rounded-sm border bg-main text-content shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
});

export { selectContentVariants };
