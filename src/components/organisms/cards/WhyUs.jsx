import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { Card } from '@/components/molecules';

const CardsWhyUs = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      color={t('color')}
      variant={t('variant')}
      {...props}
    >
      <div
        aria-hidden
        className='flex size-12 items-center justify-center rounded-sm bg-primary/10'
      >
        <Icon
          className='size-2/3'
          color={t('icon.color')}
          src={t('icon.src')}
        />
      </div>

      <Card.Title className='mt-md'>{t('title')}</Card.Title>

      <Card.Description className='mt-xs'>{t('description')}</Card.Description>
    </Card.Root>
  );
};

export default CardsWhyUs;
