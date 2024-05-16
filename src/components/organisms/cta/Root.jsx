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
      variant={t('variant')}
      {...props}
    >
      <Text.Title className='text-center'>{t.rich('title')}</Text.Title>

      <Text.Description className='mt-4 text-center'>
        {t('description')}
      </Text.Description>

      <Action
        className='mt-sm'
        color={t('action.color')}
        href={t('action.href')}
        size={t('action.size')}
        variant={t('action.variant')}
      >
        {t('action.label')}
      </Action>
    </Box>
  );
};

export default Cta;
