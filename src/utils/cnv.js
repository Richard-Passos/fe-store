import { cva } from 'class-variance-authority';

import cn from './cn';

const cnv = ({ base, ...config }) => {
  const getClassName = cva(base, config);

  return (variants) => {
    variants = Object.entries(variants ?? {}).reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value ?? undefined }),
      {}
    );

    return cn(getClassName(variants));
  };
};

export default cnv;
