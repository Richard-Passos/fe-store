import { useTranslations } from 'next-intl';

import * as organisms from '@/components/organisms';
import { cn, template, translationKeys } from '@/utils';

const ListStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Item = template(t('template'), organisms);

  return (
    <ul
      className={cn(
        'flex h-fit w-full flex-wrap justify-center gap-sm',
        className
      )}
      {...props}
    >
      {translationKeys(t, 'items').map(
        (key, i) =>
          Item && (
            <Item
              idx={i}
              key={key}
              namespace={`${namespace}.items.${key}`}
            />
          )
      )}
    </ul>
  );
};

export default ListStructure;
