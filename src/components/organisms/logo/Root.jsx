import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { normCompName } from '@/utils';

import Variants from './variants';

const OrganismsLogo = ({ variant = 'primary', ...props }, ref) => {
  const t = useTranslations('personal.logo');

  const Variant = Variants[normCompName(variant)];

  return (
    <Variant
      href='/'
      icon={t('icon')}
      label={t('label')}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(OrganismsLogo);
