'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { forwardRef, useContext } from 'react';

import { CarouselContext, CarouselProvider } from '@/contexts';
import { cn } from '@/utils';

const Carousel = forwardRef(({ options, className, ...props }, ref) => {
  const { setState } = useContext(CarouselContext);

  options = {
    autoWidth: true,
    autoHeight: true,
    focus: 'center',
    trimSpace: false,
    pagination: false,
    gap: 'var(--spacing-sm)',
    ...options
  };

  return (
    <Splide
      className={cn('flex w-full flex-col items-center', className)}
      hasTrack={false}
      onMove={(carousel) => {
        const end = carousel.length - 1,
          rate = Math.min(carousel.index / end, 1);

        setState((state) => ({
          ...state,
          activeIdx: carousel.index,
          progress: rate
        }));
      }}
      options={options}
      ref={ref}
      tag='section'
      {...props}
    />
  );
});
Carousel.displayName = 'Carousel';

const CarouselWithProvider = ({ value, props }, ref) => {
  return (
    <CarouselProvider value={value}>
      <Carousel
        ref={ref}
        {...props}
      />
    </CarouselProvider>
  );
};

export default forwardRef(CarouselWithProvider);
