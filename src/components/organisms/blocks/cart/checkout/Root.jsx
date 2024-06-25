import { getFormatter, getLocale, getTranslations } from 'next-intl/server';
import { forwardRef } from 'react';

import { Group, Radio, Stack, Text, Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { cart, cn, objToArray } from '@/utils';

import Total from './Total';
import Form from './form';

const OrganismsBlocksCartCheckout = async (
  { namespace, className, ...props },
  ref
) => {
  const [locale, format] = await Promise.all([getLocale(), getFormatter()]);

  const t = await getTranslations({ locale, namespace });

  const items = await cart.getItems(),
    itemsLength = cart.count();

  const subtotal = items.reduce(
    (sum, data = {}) => sum + data.price * data.quantity,
    0
  );

  const notification = {
    title: t('notification.title'),
    message: t('notification.description'),
    closeButtonProps: {
      'aria-label': t('notification.close.label')
    }
  };

  let shipping = {
    free: {
      price: 0
    },
    flat: {
      price: 15
    },
    pickup: {
      price: 10
    }
  };

  shipping = objToArray(shipping).map((data) => ({
    ...data,
    label: t(`shipping.${data.id}.label`)
  }));

  const fields = {
    shipping: {
      defaultValue: shipping[0]?.id,
      schema: {
        string: {},
        min: { value: 1, message: '' }
      }
    }
  };

  let groups = {
    subtotal: {
      content: (
        <strong>
          {format.number(subtotal, { style: 'currency', currency: 'USD' })}
        </strong>
      )
    },
    shipping: {
      content: (
        <Stack
          align='end'
          className='ml-auto'
          gap='xs'
        >
          <Form.Control name='shipping'>
            <Radio.Group defaultValue='free'>
              <Stack align='end'>
                {shipping.map((data = {}) => (
                  <Radio.Root
                    key={data.id}
                    label={
                      <>
                        {data.label}:&nbsp;
                        <strong>
                          {format.number(data.price, {
                            style: 'currency',
                            currency: 'USD'
                          })}
                        </strong>
                      </>
                    }
                    labelPosition='left'
                    value={data.id}
                  />
                ))}
              </Stack>
            </Radio.Group>
          </Form.Control>

          <Text
            className='mt-md'
            size='xs'
          >
            {t('shipping.to')}&nbsp;
            <strong>xxx xx xxxx</strong>
          </Text>

          <Action
            size='xs'
            variant='subtle'
          >
            {t('shipping.change.label')}
          </Action>
        </Stack>
      )
    },
    total: {
      content: (
        <Total
          defaultShipping={fields.shipping.defaultValue}
          shipping={shipping}
          subtotal={subtotal}
        />
      )
    }
  };

  groups = objToArray(groups);

  return (
    <Form.Root
      className={cn('px-md', className)}
      notification={notification}
      ref={ref}
      {...props}
    >
      {groups.map((data = {}) => (
        <Group
          align='start'
          className='py-lg'
          justify='space-between'
          key={data.id}
        >
          <Title
            component='h3'
            order={5}
          >
            {t(`${data.id}.label`)}
          </Title>

          {data.content}
        </Group>
      ))}

      <Form.Submit asChild>
        <Action
          disabled={!itemsLength}
          fullWidth
          size='md'
        >
          {t('submit.label')}
        </Action>
      </Form.Submit>
    </Form.Root>
  );
};

export default forwardRef(OrganismsBlocksCartCheckout);
