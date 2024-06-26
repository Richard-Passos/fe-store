import { forwardRef } from 'react';

import { Image } from '@/components/atoms';
import { Carousel } from '@/components/molecules';

const OrganismsBlocksProductDisplayCarousel = ({ data, ...props }, ref) => {
  return (
    <Carousel.Root
      options={{
        type: 'loop',
        pagination: true,
        arrows: false,
        gap: '0'
      }}
      ref={ref}
      {...props}
    >
      <Carousel.Track className='!overflow-hidden rounded-lg'>
        {data.map(([key, data], i) => (
          <Carousel.Item
            className='aspect-square w-full bg-gray-light md:aspect-[1/1.4]'
            key={key}
          >
            <Image
              alt={data.alt}
              className='object-cover'
              fill
              priority={i === 0}
              src={data.src}
            />
          </Carousel.Item>
        ))}
      </Carousel.Track>

      <Carousel.Pagination />
    </Carousel.Root>
  );
};

export default forwardRef(OrganismsBlocksProductDisplayCarousel);
