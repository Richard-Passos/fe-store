'use client';

import { Root } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import variants from './variants';

const Toast = ({ color, type, className, ...props }, ref) => {
  return (
    <Root
      className={variants({ color, type, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Toast);
