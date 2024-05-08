import { useTranslations } from 'next-intl';

import * as organisms from '@/components/organisms';
import { cn, getTemplate, getTranslationKeys } from '@/utils';

const CarouselStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Item = getTemplate(t('template'), organisms);

  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-sm',
        className
      )}
      {...props}
    >
      {getTranslationKeys(t, 'items').map(
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

export default CarouselStructure;
