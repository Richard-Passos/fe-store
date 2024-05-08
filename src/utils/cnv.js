import { cva } from 'class-variance-authority';

import colorVariants, { defaultColor } from '@/components/colorVariants';

import cn from './cn';

const DEFAULTS = {
  color: defaultColor
};

const cnv = ({ base, variants, defaultVariants, ...config }) => {
  variants = {
    color: colorVariants,
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

  return (variants = []) => {
    variants = Object.entries(variants).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value ?? undefined }),
      {}
    );

    return cn(getClassName(variants));
  };
};

export default cnv;
