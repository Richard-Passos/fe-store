'use client';

import { Root } from '@radix-ui/react-toggle';
import { forwardRef } from 'react';

import toggle from './variants';

const Toggle = ({ color, variant, size, className, ...props }, ref) => {
  return (
    <Root
      className={toggle({ color, variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Toggle);
