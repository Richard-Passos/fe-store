import { cva } from 'class-variance-authority';

import cn from './cn';

const cnv = ({ base, ...rest }) => {
  const res = cva(base, rest);

  return (variants) => cn(res(variants));
};

export default cnv;
