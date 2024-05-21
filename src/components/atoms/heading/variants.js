import { cnv } from '@/utils';

const headingVariants = {
  h1: 'text-5xl/none font-bold tracking-tight',
  h2: 'text-2xl font-semibold tracking-tight',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  h5: 'font-semibold',
  h6: 'text-xs uppercase font-bold tracking-wider'
};

const heading = cnv({
  base: 'leading-none text-content first-letter:uppercase [&_b]:text-primary',
  variants: {
    variant: headingVariants
  },
  defaultVariants: {
    variant: 'h2'
  }
});

export default heading;
export { heading, headingVariants };
