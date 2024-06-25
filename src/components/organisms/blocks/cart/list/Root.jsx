import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { CartForm } from '@/components/organisms/forms';
import { cart, cn } from '@/utils';

import Empty from './Empty';
import Items from './Items';

const OrganismsBlocksCartList = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace);

  const notification = {
    title: t('notification.title'),
    message: t('notification.description'),
    closeButtonProps: {
      'aria-label': t('notification.close.label')
    }
  };

  const items = cart.get().value;

  const fields = getFields(items);

  return (
    <CartForm.Root
      className={cn('relative', className)}
      fields={fields}
      notification={notification}
      ref={ref}
      type='update'
      {...props}
    >
      <Empty>{t('empty.label')}</Empty>

      <Items namespace={namespace} />
    </CartForm.Root>
  );
};

const getFields = (items = []) => ({
  items: {
    type: 'array',
    fields: items.reduce(
      (obj, data, i) => ({
        ...obj,
        [i]: {
          id: {
            defaultValue: data.id,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          urlId: {
            defaultValue: data.urlId,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          size: {
            defaultValue: data.size,
            schema: {
              string: {},
              min: { value: 1, message: '' }
            }
          },
          quantity: {
            defaultValue: data.quantity,
            schema: {
              number: {},
              min: { value: 1, message: '' }
            }
          }
        }
      }),
      {}
    )
  }
});

export default forwardRef(OrganismsBlocksCartList);
