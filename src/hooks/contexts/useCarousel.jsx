'use client';

import { useContext } from 'react';

import { CarouselContext } from '@/contexts';

const useCarousel = () => {
  const context = useContext(CarouselContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useCarousel must be within Carousel.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useCarousel;
