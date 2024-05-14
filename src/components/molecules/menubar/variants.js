import { cnv } from '@/utils';

const menubarItem = cnv({
  base: 'flex cursor-default select-none items-center gap-2 rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-active data-disabled:pointer-events-none data-disabled:opacity-50'
});

const menubarContent = cnv({
  base: 'z-50 max-h-[--radix-menubar-content-available-height] min-w-[12rem] max-w-[--radix-menubar-content-available-width] overflow-y-auto overflow-x-hidden rounded-md border bg-main p-1 shadow-md data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
});

export { menubarItem, menubarContent };
