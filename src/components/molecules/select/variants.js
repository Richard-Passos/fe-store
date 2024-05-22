import { cnv } from '@/utils';

const selectContentPositions = {
  popper:
    'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
  itemAligned: ''
};

const selectContent = cnv({
  base: 'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-sm p-1 data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    color: {},
    position: selectContentPositions
  },
  defaultVariants: {
    position: 'popper'
  }
});

const selectItemVariants = {
  solid: 'focus:bg-active',
  ghost: 'focus:bg-main/10',
  link: 'focus:underline'
};

const selectItem = cnv({
  base: 'group/select-item flex w-full select-none focus-visible:outline-0',
  variants: {
    variant: selectItemVariants
  },
  compoundVariants: [
    {
      color: ['main', 'inherit'],
      variant: 'ghost',
      className: 'focus:bg-active'
    }
  ],
  defaultVariants: {
    variant: 'solid'
  }
});

export {
  selectContent,
  selectContentPositions,
  selectItem,
  selectItemVariants
};
