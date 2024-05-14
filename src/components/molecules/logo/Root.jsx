import { useTranslations } from 'next-intl';

import { Icon, Link } from '@/components/atoms';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const Root = ({ color, variant, size, className, ...props }) => {
  const t = useTranslations('personalInfo.logo');

  return (
    <Link
      className={button({
        color: color ?? t('color'),
        variant: variant ?? t('variant'),
        size: size ?? t('size'),
        className: cn('aspect-square p-1 before:hidden', className)
      })}
      href='/'
      {...props}
    >
      <Icon
        color='current'
        src={t('src')}
      />
    </Link>
  );
};

export default Root;
