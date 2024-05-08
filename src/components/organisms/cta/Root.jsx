import { useTranslations } from 'next-intl';

import { Box, Text } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { cn } from '@/utils';

const Cta = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Box
      className={cn('my-lg items-center rounded-lg sm:p-md', className)}
      color={t('color')}
      type={t('type')}
      {...props}
    >
      <Text.Title className='text-center'>{t.rich('title')}</Text.Title>

      <Text.Description className='mt-4 text-center'>
        {t('description')}
      </Text.Description>

      <Action
        className='mt-sm'
        namespace={`${namespace}.action`}
      />
    </Box>
  );
};

export default Cta;
