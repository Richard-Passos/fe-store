import { getFormatter, getLocale, getTranslations } from 'next-intl/server';
import { forwardRef } from 'react';

import {
  Badge,
  Button,
  Group,
  Indicator,
  Radio,
  Text,
  Title
} from '@/components/atoms';
import { Action } from '@/components/molecules';
import { CartForm } from '@/components/organisms/forms';
import { cn, objToArray } from '@/utils';

import Carousel from './Carousel';

const OrganismsBlocksProductDisplay = async (
  { namespace, id, className, ...props },
  ref
) => {
  const [locale, format] = await Promise.all([getLocale(), getFormatter()]);

  const t = await getTranslations({ locale, namespace });

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}?locale=${locale}`;

  const res = await fetch(url, { cache: 'no-store' });

  const data = (await res.json()).data ?? {};

  const { thumbnailImage = {}, galleryImages = {} } = data;

  const images = [
    ['thumbnail', thumbnailImage],
    ...Object.entries(galleryImages)
  ];

  const sizes = objToArray(data.sizes);

  const defaultSize = sizes?.find((data) => data.quantity);

  const fields = {
    items: {
      type: 'array',
      fields: {
        0: {
          id: {
            defaultValue: data.id,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          urlId: {
            defaultValue: data.id,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          size: {
            defaultValue: defaultSize?.id,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          quantity: {
            defaultValue: 1,
            schema: {
              number: {},
              min: { value: 1, message: '' }
            }
          }
        }
      }
    }
  };

  const notification = {
    title: t('notification.title'),
    message: t('notification.description'),
    closeButtonProps: {
      'aria-label': t('notification.close.label')
    }
  };

  return (
    <section
      className={cn(
        'flex min-h-svh w-9/10 max-w-screen-lg items-center gap-lg py-[--py] [--py:theme(spacing.xl)] max-md:flex-col sm:pt-[calc(var(--py)+var(--header-h))] 2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    >
      <Indicator
        className='w-full flex-1 md:max-w-md'
        disabled={!data.isNew?.value}
        label={data.isNew?.label}
        offset={32}
        size={44}
      >
        <Carousel data={images} />
      </Indicator>

      <CartForm.Root
        className='h-full flex-1 p-md'
        fields={fields}
        id={id}
        notification={notification}
        type='create'
      >
        <Badge color='green'>{data.type?.label}</Badge>

        <Title order={1}>{data.title}</Title>

        <Text>{data.description}</Text>

        <CartForm.Control name='items.0.size'>
          <Radio.Group
            className='mt-lg'
            defaultValue={defaultSize?.id}
            label={`${t('size.label')}:`}
          >
            <Group gap='xs'>
              {sizes.map((data = {}) => (
                <Button
                  className='w-fit disabled:cursor-not-allowed data-checked:border-transparent  data-checked:bg-primary-filled data-checked:text-primary-contrast'
                  component={Radio.Card}
                  disabled={!data.quantity}
                  key={data.id}
                  value={data.id}
                  variant='default'
                >
                  {data.label}
                </Button>
              ))}
            </Group>
          </Radio.Group>
        </CartForm.Control>

        <CartForm.Control name='items.0.quantity'>
          <CartForm.QuantityInput
            className='mt-lg'
            defaultSize={{ ...defaultSize, name: 'items.0.size' }}
            defaultValue={fields.items.fields[0].quantity.defaultValue}
            label={`${t('quantity.label')}:`}
            min={fields.items.fields[0].quantity.schema.min.value}
            sizes={sizes}
          />
        </CartForm.Control>

        <Group className='mt-xl pt-md'>
          <CartForm.Submit asChild>
            <Action
              className='min-w-fit max-w-48 grow'
              size='md'
            >
              {t('add.label')}
            </Action>
          </CartForm.Submit>

          <Title
            component='span'
            order={3}
          >
            {format.number(data.price, {
              style: 'currency',
              currency: 'USD'
            })}
          </Title>
        </Group>
      </CartForm.Root>
    </section>
  );
};

export default forwardRef(OrganismsBlocksProductDisplay);
