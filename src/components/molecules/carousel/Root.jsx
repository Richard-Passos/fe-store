'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { forwardRef } from 'react';

import { CarouselProvider } from '@/contexts';
import { useCarouselContext } from '@/hooks/contexts';
import { cn } from '@/utils';

const MoleculesCarousel = forwardRef(
  ({ options, className, ...props }, ref) => {
    const { setState } = useCarouselContext();

    options = {
      autoWidth: true,
      autoHeight: true,
      focus: 'center',
      pagination: false,
      gap: 'var(--spacing-md)',
      ...options
    };

    return (
      <Splide
        className={cn(
          'flex w-full flex-col items-center justify-center',
          className
        )}
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
  }
);
MoleculesCarousel.displayName = 'MoleculesCarousel';

const MoleculesCarouselWithProvider = (props, ref) => {
  return (
    <CarouselProvider>
      <MoleculesCarousel
        ref={ref}
        {...props}
      />
    </CarouselProvider>
  );
};

export default forwardRef(MoleculesCarouselWithProvider);
