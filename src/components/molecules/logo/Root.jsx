import { useTranslations } from 'next-intl';

import { Icon, Link } from '@/components/atoms';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  const t = useTranslations('personalInfo.logo');

  return (
    <Link
      className={cn(
        'size-10 overflow-hidden rounded-sm p-1 transition-none',
        className,
      )}
      href='/'
      {...props}
    >
      <Icon src={t('src')} />
    </Link>
  );
};

export default Root;
