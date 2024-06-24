import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { Grid } from '@/components/molecules';
import { CardRoot } from '@/components/molecules/card';
import { cart, cn } from '@/utils';

import Checkout from './checkout';
import List from './list';

const OrganismsBlocksCart = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace);

  const cartLength = cart.count();

  return (
    <Grid.Root
      className={cn('my-xl w-full py-xl', className)}
      ref={ref}
      {...props}
    >
      <Grid.Col span={{ base: 12, lg: 7 }}>
        <CardRoot
          className='gap-md rounded-lg bg-transparent p-lg'
          withBorder
        >
          <Title
            order={1}
            size='h3'
          >
            {t('title', { count: cartLength })}
          </Title>

          <List namespace={`${namespace}.list`} />
        </CardRoot>
      </Grid.Col>

      <Grid.Col span='auto'>
        <CardRoot
          className='gap-md rounded-lg bg-transparent p-lg sm:sticky sm:top-lg'
          withBorder
        >
          <Title
            order={2}
            size='h3'
          >
            {t('checkout.title')}
          </Title>

          <Checkout namespace={`${namespace}.checkout`} />
        </CardRoot>
      </Grid.Col>
    </Grid.Root>
  );
};

export default forwardRef(OrganismsBlocksCart);
