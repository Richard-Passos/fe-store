'use client';

import { forwardRef, useContext } from 'react';

import { Progress } from '@/components/atoms';
import { CarouselContext } from '@/contexts';

const CarouselProgress = (props, ref) => {
  const { state } = useContext(CarouselContext);

  return (
    <Progress.Root
      max={100}
      min={0}
      ref={ref}
      value={state.progress}
      {...props}
    >
      <Progress.Indicator />
    </Progress.Root>
  );
};

export default forwardRef(CarouselProgress);
