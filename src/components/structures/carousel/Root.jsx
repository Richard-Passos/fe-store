import { useTranslations } from 'next-intl';

import * as organisms from '@/components/organisms';
import { cn, template, translationKeys } from '@/utils';

const CarouselStructure = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const Item = template(t('template'), organisms);

  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-md',
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

export default CarouselStructure;
