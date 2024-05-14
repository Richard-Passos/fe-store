import { useTranslations } from 'next-intl';

import { Icon, Separator } from '@/components/atoms';
import { Sheet } from '@/components/molecules';
import { cn } from '@/utils';

import Nav from './Nav';

const HeaderMenuContent = ({ className, ...props }) => {
  const global = useTranslations(),
    t = useTranslations('header.menu');

  return (
    <Sheet.Content
      className={cn('overflow-hidden p-0', className)}
      dir={t('direction')}
      {...props}
    >
      <Sheet.Header className='p-6'>
        <Sheet.Title>{t('title')}</Sheet.Title>

        <Sheet.Description>{t('description')}</Sheet.Description>
      </Sheet.Header>

      <Separator className='mx-6 w-auto grow' />

      <Nav
        className='mt-6 px-6'
        data={global.raw('components')}
      />

      <Sheet.Close
        aria-label={t('close.label')}
        color={t('close.color')}
        size={t('close.size')}
        variant={t('close.variant')}
      >
        <Icon
          className='size-1/2'
          color={t('close.icon.color')}
          src={t('close.icon.src')}
        />
      </Sheet.Close>
    </Sheet.Content>
  );
};

export default HeaderMenuContent;
