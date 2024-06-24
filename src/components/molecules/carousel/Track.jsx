'use client';

import { SplideTrack } from '@splidejs/react-splide';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculesCarouselTrack = ({ className, ...props }, ref) => {
  return (
    <SplideTrack
      className={cn(
        'w-full cursor-grab !overflow-x-clip !overflow-y-visible active:cursor-grabbing',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesCarouselTrack);
