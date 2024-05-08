import { useTranslations } from 'next-intl';

import { BentoGrid } from '@/components/molecules';
import * as organisms from '@/components/organisms';
import { cn, getTemplate, getTranslationKeys } from '@/utils';

const BentoGridOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <BentoGrid.Root
      className={cn('grow', className)}
      templates={t.raw('templates')}
      {...props}
    >
      {getTranslationKeys(t, 'items').map((key, i) => {
        const Item = getTemplate(t(`items.${key}.template`), organisms);

        return (
          Item && (
            <BentoGrid.Item
              asChild
              idx={i}
              key={key}
            >
              <Item
                className='max-w-none basis-0'
                idx={i}
                namespace={`${namespace}.items.${key}`}
              />
            </BentoGrid.Item>
          )
        );
      })}
    </BentoGrid.Root>
  );
};

export default BentoGridOrganism;
