'use client';

import { Root } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

import variants from './variants';

const Slider = ({ dir, className, ...props }, ref) => {
  return (
    <Root
      className={variants({ dir, className })}
      orientation={dir}
      ref={ref}
      {...props}
    />
  );
};



export default forwardRef(Slider);
