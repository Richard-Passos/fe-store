import { cnv } from '@/utils';

const selectContent = cnv({
  base: 'relative z-50 max-h-[--radix-select-content-available-height] min-w-[--radix-select-trigger-width] overflow-hidden rounded-sm border bg-main text-content shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
});

const selectScrollButtonDirections = {
  down: 'bottom-0 border-t',
  up: 'top-0 border-b'
};

const selectScrollButton = cnv({
  base: 'absolute z-10 flex h-6 w-full cursor-default items-center justify-center bg-content/75',
  variants: {
    dir: selectScrollButtonDirections
  },
  defaultVariants: {
    dir: 'down'
  }
});

export { selectContent, selectScrollButton, selectScrollButtonDirections };
