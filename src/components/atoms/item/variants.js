import { cnv } from '@/utils';

const item = cnv({
  base: 'flex cursor-pointer select-none items-center gap-xs rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-active data-disabled:pointer-events-none data-disabled:opacity-50'
});

export default item;
export { item };
