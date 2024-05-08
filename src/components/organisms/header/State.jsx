'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const HeaderState = ({ style, ...props }, ref) => {
  const { height } = useSelector((data) => data.header);

  return (
    <Slot
      ref={ref}
      style={{ '--header-h': `${height}px`, ...style }}
      {...props}
    />
  );
};

export default forwardRef(HeaderState);
