import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
import { Collapsible } from '@/components/molecules';
import { cn, normId, translationKeys } from '@/utils';

import Demos from '../Root';
import Item from './Item';
import Title from './Title';

const DemosCollapsibleOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  const items = translationKeys(t, 'items');

  const [fisrtItem, ...restItems] = items;

  return (
    <Demos {...props}>
      <Collapsible.Root className='w-full max-w-sm'>
        <Item
          color={t('color')}
          variant={t('variant')}
        >
          <Title
            asChild
            className='font-medium'
          >
            <h2>
              {t('title', {
                user: normId(t('user')),
                count: items.length
              })}
            </h2>
          </Title>
          &nbsp;
          <Collapsible.Trigger
            aria-label={t('trigger.label')}
            className='group aspect-square px-0'
            color={t('trigger.color')}
            size={t('trigger.size')}
            variant={t('trigger.variant')}
          >
            <Icon
              className={cn(
                'size-2/3 group-data-open:animate-[anim]',
                animations[t('trigger.icon.animation')]
              )}
              color={t('trigger.icon.color')}
              src={t('trigger.icon.src')}
            />
          </Collapsible.Trigger>
        </Item>

        <Item
          className='mt-2'
          color={t(`items.${fisrtItem}.color`)}
          variant={t(`items.${fisrtItem}.variant`)}
        >
          <Title>{t(`items.${fisrtItem}.title`)}</Title>
        </Item>

        <Collapsible.Content className='mt-2 space-y-2'>
          {restItems.map((key) => (
            <Item
              color={t(`items.${key}.color`)}
              key={key}
              variant={t(`items.${key}.variant`)}
            >
              <Title>{t(`items.${key}.title`)}</Title>
            </Item>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </Demos>
  );
};

export default DemosCollapsibleOrganism;
