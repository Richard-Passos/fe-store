import { cva } from 'class-variance-authority';

import colors, { defaultColor } from '@/components/colors';

import cn from './cn';

const DEFAULTS = {
  color: defaultColor
};

const cnv = ({ base, variants, defaultVariants, ...config }) => {
  variants = {
    color: colors,
    ...variants
  };

  defaultVariants = {
    ...DEFAULTS,
    ...Object.entries(defaultVariants ?? {}).reduce(
      (obj, [key, value]) => ({
        ...obj,
        [key]: value ?? DEFAULTS[key]
      }),
      {}
    )
  };

  const getClassName = cva(base, { ...config, variants, defaultVariants });

  return (variants) => {
    variants = Object.entries(variants ?? {}).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value ?? undefined }),
      {}
    );

    return cn(getClassName(variants));
  };
};

export default cnv;
