import { useTranslations } from 'next-intl';

import { Card } from '@/components/molecules';
import { cn } from '@/utils';

const CardEnum = ({ namespace, className, idx, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Card.Root
      className={cn('flex-row gap-4 p-xs', className)}
      color={t('color')}
      variant={t('variant')}
      {...props}
    >
      <Card.Title className='text-primary'>
        {`${idx + 1}`.padStart(2, '0')}
      </Card.Title>

      <Card.Description className='grow'>{t('description')}</Card.Description>
    </Card.Root>
  );
};

export default CardEnum;
