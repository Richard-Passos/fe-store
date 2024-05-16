import { useTranslations } from 'next-intl';

import { Badge, Icon } from '@/components/atoms';
import { Action, Card } from '@/components/molecules';
import { cn, renderComp, translationKeys } from '@/utils';

const CardsPricing = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      className={cn('items-center', className)}
      color={t('color')}
      variant={t('variant')}
      {...props}
    >
      {renderComp(
        <Badge
          className='absolute top-0 -translate-y-1/2'
          color={t('badge.color')}
          variant={t('badge.variant')}
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
        {translationKeys(t, 'items').map((key) => (
          <li
            className='flex gap-2'
            key={key}
          >
            <div className='size-4'>
              <Icon
                color={t(`items.${key}.icon.color`)}
                src={t(`items.${key}.icon.src`)}
              />
            </div>

            <Card.Description className='text-xs'>
              {t(`items.${key}.description`)}
            </Card.Description>
          </li>
        ))}
      </ul>

      <Action
        className='mt-auto w-full'
        color={t('action.color')}
        href={t('action.href')}
        size={t('action.size')}
        variant={t('action.variant')}
      >
        {t('action.label')}
      </Action>
    </Card.Root>
  );
};

export default CardsPricing;
