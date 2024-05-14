import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { SheetTrigger } from '@/components/molecules/sheet';
import { cn } from '@/utils';

const HeaderMenuTrigger = ({ className, ...props }) => {
  const t = useTranslations('header.menu.action');

  return (
    <SheetTrigger
      aria-label={t('label')}
      className={cn('aspect-square px-0', className)}
      color={t('color')}
      size={t('size')}
      variant={t('variant')}
      {...props}
    >
      <Icon
        className='size-1/2'
        color={t('icon.color')}
        src={t('icon.src')}
      />
    </SheetTrigger>
  );
};

export default HeaderMenuTrigger;
