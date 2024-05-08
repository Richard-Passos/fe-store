import { useTranslations } from 'next-intl';

import { Button, Link } from '@/components/atoms';
import { capitalize } from '@/utils';

const Action = ({ namespace, href, children, ...props }) => {
  const translations = useTranslations(namespace);

  const t = namespace ? translations : () => {};

  href = href ?? t('href');
  children = children ?? capitalize(t('label'));

  return (
    <Button
      asChild={href}
      color={t('color')}
      size={t('size')}
      type={t('type')}
      {...props}
    >
      {href ? (
        <Link
          className='before:hidden'
          href={href}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </Button>
  );
};

export default Action;
