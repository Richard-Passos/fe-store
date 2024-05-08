import { cnv } from '@/utils';

const controlTypes = {
  solid: 'bg-main text-content hover:bg-active',
  outline: 'bg-main text-content border-border hover:border-active'
};

const controlVariants = cnv({
  base: 'group flex h-10 w-full cursor-pointer rounded-sm border px-4 text-sm transition-colors placeholder:text-content/75 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    type: controlTypes
  },
  defaultVariants: {
    type: 'solid'
  }
});

export default controlVariants;
export { controlVariants, controlTypes };
