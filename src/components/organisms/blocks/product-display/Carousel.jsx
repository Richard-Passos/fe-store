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
            className='w-full bg-gray-light'
            key={key}
          >
            <Image
              alt={data.alt}
              className='size-full object-cover'
              height={600}
              priority={i === 0}
              src={data.src}
              width={448}
            />
          </Carousel.Item>
        ))}
      </Carousel.Track>

      <Carousel.Pagination />
    </Carousel.Root>
  );
};

export default forwardRef(OrganismsBlocksProductDisplayCarousel);
