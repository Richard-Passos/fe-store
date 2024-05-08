import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { Card } from '@/components/molecules';

const CardsWhyUs = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      color={t('color')}
      type={t('type')}
      {...props}
    >
      <div
        aria-hidden
        className='flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary'
      >
        <Icon
          className='size-2/3'
          src={t('icon')}
        />
      </div>

      <Card.Title className='mt-6'>{t('title')}</Card.Title>

      <Card.Description className='mt-2'>{t('description')}</Card.Description>
    </Card.Root>
  );
};

export default CardsWhyUs;
