'use client';

import { useContext } from 'react';

import { TextRoot } from '@/components/atoms/text';
import { CarouselContext } from '@/contexts';
import { cn } from '@/utils';

const CarouselActiveIdx = ({ itemsLength, className, ...props }) => {
  const { state } = useContext(CarouselContext);

  const lengthStr = itemsLength?.toString() ?? '';

  return (
    <TextRoot
      aria-label={state.activeIdx}
      className={cn('text-xs font-medium', className)}
      {...props}
    >
      <span className='relative'>
        <span className='absolute right-0 top-0'>
          {`${+state.activeIdx + 1}`.padStart(lengthStr.length, '0')}
        </span>

        <span className='invisible'>{'0'.repeat(lengthStr.length)}</span>
      </span>
      — {lengthStr.padStart(2, '0')}
    </TextRoot>
  );
};

export default CarouselActiveIdx;
