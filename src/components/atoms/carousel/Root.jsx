'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { forwardRef } from 'react';

import { CarouselProvider } from '@/contexts';
import { useCarousel } from '@/hooks';

const CarouselRoot = forwardRef(({ options, ...props }, ref) => {
  const { setState } = useCarousel();

  options = {
    autoWidth: true,
    autoHeight: true,
    focus: 'center',
    trimSpace: false,
    pagination: false,
    gap: 'var(--spacing-s)',
    ...options
  };

  return (
    <Splide
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
CarouselRoot.displayName = 'CarouselRoot';

const CarouselRootWithProvider = ({ value, props }, ref) => {
  return (
    <CarouselProvider value={value}>
      <CarouselRoot
        ref={ref}
        {...props}
      />
    </CarouselProvider>
  );
};

export default forwardRef(CarouselRootWithProvider);
