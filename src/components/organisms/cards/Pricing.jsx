import { useTranslations } from 'next-intl';

import { Badge, Icon } from '@/components/atoms';
import { Action, Card } from '@/components/molecules';
import { cn, getTranslationKeys, renderComp } from '@/utils';

const CardsPricing = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      className={cn('items-center', className)}
      color={t('color')}
      type={t('type')}
      {...props}
    >
      {renderComp(
        <Badge
          className='absolute top-0 w-fit -translate-y-1/2'
          color={t('badge.color')}
          type={t('badge.type')}
        >
          {t('badge.label')}
        </Badge>,
        [t('badge.label')]
      )}

      <Card.Title className='mt-2'>{t('title')}</Card.Title>

      <Card.Description className='mt-4 font-medium'>
        {t('price')}
      </Card.Description>

      <ul className='my-sm flex w-9/10 flex-col justify-start gap-1.5'>
        {getTranslationKeys(t, 'items').map((key) => (
          <li
            className='flex gap-2'
            key={key}
          >
            <div className='size-4 text-primary'>
              <Icon src={t(`items.${key}.icon`)} />
            </div>

            <Card.Description className='text-xs'>
              {t(`items.${key}.description`)}
            </Card.Description>
          </li>
        ))}
      </ul>

      <Action
        className='mt-auto w-full'
        namespace={`${namespace}.action`}
      />
    </Card.Root>
  );
};

export default CardsPricing;
