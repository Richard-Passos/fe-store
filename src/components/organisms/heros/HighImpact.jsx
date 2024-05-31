import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Button, Section, Text, Title } from '@/components/atoms';
import { cn } from '@/utils';

const OrganismsHeroHighImpact = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace);

  return (
    <Section
      className={cn('-mt-[--header-h] min-h-svh py-xl', className)}
      ref={ref}
      {...props}
    >
      <Title
        className='text-center'
        order={1}
      >
        {t('title')}
      </Title>

      <Text className='text-center sm:max-w-md'>{t('description')}</Text>

      <Button className='mt-lg'>{t('action.label')}</Button>
    </Section>
  );
};

export default forwardRef(OrganismsHeroHighImpact);
