import { useTranslations } from 'next-intl';

import { Button, Icon, Text } from '@/components/atoms';
import { SheetTrigger } from '@/components/molecules/sheet';
import { cn } from '@/utils';

const HeaderMenuTrigger = ({ className, ...props }) => {
  const t = useTranslations('header.menu.trigger');

  return (
    <SheetTrigger asChild>
      <Button
        className={cn(
          'group relative aspect-square rounded-sm px-0',
          className
        )}
        color={t('color')}
        size={t('size')}
        type={t('type')}
        {...props}
      >
        <Icon
          className='size-1/2'
          src={t('icon')}
        />

        <Text.Root className='sr-only'>{t('label')}</Text.Root>
      </Button>
    </SheetTrigger>
  );
};

export default HeaderMenuTrigger;
