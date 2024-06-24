import { getFormatter, getLocale, getTranslations } from 'next-intl/server';
import { forwardRef } from 'react';

import { Badge, Image, Title } from '@/components/atoms';
import { Action, Table } from '@/components/molecules';
import { CartForm } from '@/components/organisms/forms';
import { cart, objToArray, translationKeys } from '@/utils';

const OrganismsBlocksCartListItems = async ({ namespace, ...props }, ref) => {
  const [locale, format] = await Promise.all([getLocale(), getFormatter()]);

  const t = await getTranslations({ locale, namespace });

  const titles = ['empty-1', 'empty-2', ...translationKeys(t, 'titles')];

  const itemsLength = cart.count();

  if (!itemsLength) return null;

  const items = await cart.getItems();

  return (
    <>
      <Table.Root
        ref={ref}
        verticalSpacing='lg'
        {...props}
      >
        <Table.Head.Root>
          {titles.map((key) => (
            <Table.Head.Data key={key}>{t(`titles.${key}`)}</Table.Head.Data>
          ))}
        </Table.Head.Root>

        <Table.Body>
          {items.map((data = {}, i) => (
            <Table.Row
              className='group'
              key={data.id}
            >
              <Table.Data>
                <CartForm.Remove
                  aria-label={t('remove.label')}
                  className='focus-visible:opacity-100 group-hover:opacity-100 sm:opacity-0'
                  id={data.id}
                />
              </Table.Data>

              <Table.Data>
                <div className='relative aspect-square h-auto w-24 max-w-full overflow-hidden rounded-lg'>
                  <Image
                    alt={data.thumbnailImage?.alt}
                    className='object-cover'
                    height={96}
                    priority={i === 0}
                    src={data.thumbnailImage?.src}
                    width={96}
                  />
                </div>
              </Table.Data>

              <Table.Data>
                <Title order={4}>{data.title}</Title>

                <Badge
                  className='mt-1 block'
                  color='green'
                  size='xs'
                >
                  {data.sizes?.[data.size]?.label}
                </Badge>
              </Table.Data>

              <Table.Data>
                {format.number(data.price, {
                  style: 'currency',
                  currency: 'USD'
                })}
              </Table.Data>

              <Table.Data>
                <CartForm.Control name={`items.${i}.quantity`}>
                  <CartForm.QuantityInput
                    defaultSize={{ name: `items.${i}.size`, id: data.size }}
                    defaultValue={data.quantity}
                    size='xs'
                    sizes={objToArray(data.sizes)}
                  />
                </CartForm.Control>
              </Table.Data>

              <Table.Data>
                {format.number(data.price * data.quantity, {
                  style: 'currency',
                  currency: 'USD'
                })}
              </Table.Data>
            </Table.Row>
          ))}

          <Table.Row />
        </Table.Body>
      </Table.Root>

      <section className='flex w-full gap-md px-md pt-lg max-sm:flex-col sm:items-center'>
        <CartForm.RemoveAll className='max-sm:w-full'>
          {t('removeAll.label', { count: itemsLength })}
        </CartForm.RemoveAll>

        <CartForm.Submit
          asChild
          className='ml-auto max-sm:w-full'
        >
          <Action>{t('updateAll.label')}</Action>
        </CartForm.Submit>
      </section>
    </>
  );
};

export default forwardRef(OrganismsBlocksCartListItems);
