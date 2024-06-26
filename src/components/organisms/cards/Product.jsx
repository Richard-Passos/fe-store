'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

import { Group, Image, Indicator, Title } from '@/components/atoms';
import { Card } from '@/components/molecules';
import { cn } from '@/utils';

const OrganismsCardsProduct = ({ data = {}, className, ...props }, ref) => {
  const { thumbnailImage = {}, mainImage = {} } = data;

  const href = `/products/${data.id}`;

  return (
    <Indicator
      className={cn(' sm:basis-60', className)}
      disabled={!data.isNew?.value}
      label={data.isNew?.label}
      offset={24}
      ref={ref}
      size={36}
      {...props}
    >
      <Card.Root className='group rounded-lg has-[:focus-visible]:outline dark:bg-transparent'>
        <Card.Section
          className='relative aspect-[.80] overflow-hidden rounded-inherit bg-gray-light'
          component={Link}
          href={href}
          tabIndex={-1}
        >
          <Image
            alt={thumbnailImage.alt}
            className='object-cover'
            fill
            src={thumbnailImage.src}
          />

          <Image
            alt={mainImage.alt}
            className='absolute inset-0 object-cover opacity-0 transition-opacity group-hover:opacity-100'
            fill
            src={mainImage.src}
          />
        </Card.Section>

        <Group
          align='start'
          className='mt-sm'
          wrap='nowrap'
        >
          <Title
            className='grow'
            order={4}
          >
            <Link
              className='text-current no-underline focus-visible:outline-none'
              href={href}
            >
              {data.title}
            </Link>
          </Title>

          <span className='font-semibold'>{data.price}</span>
        </Group>
      </Card.Root>
    </Indicator>
  );
};

export default forwardRef(OrganismsCardsProduct);
