import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Icon, Link } from '@/components/atoms';
import { cn } from '@/utils';

const OrganismsLogo = ({ className, ...props }, ref) => {
  const t = useTranslations('personalInfo.logo');

  return (
    <Link
      aria-label={t('alt')}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded',
        className
      )}
      href='/'
      ref={ref}
      {...props}
    >
      <Icon src={t('src')} />
    </Link>
  );
};

export default forwardRef(OrganismsLogo);
