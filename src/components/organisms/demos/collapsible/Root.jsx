import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Box, Icon, Text } from '@/components/atoms';
import { Collapsible } from '@/components/molecules';
import { cn, normId, translationKeys } from '@/utils';

import Demos from '../Root';

const DemosCollapsibleOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  const items = translationKeys(t, 'items');

  const [fisrtItem, ...restItems] = items;

  return (
    <Demos {...props}>
      <Collapsible.Root className='w-full max-w-sm'>
        <DemosCollapsibleOrganismItem
          color={t('color')}
          variant={t('variant')}
        >
          <DemosCollapsibleOrganismTitle
            asChild
            className='font-medium'
          >
            <h2>
              {t('title', {
                user: normId(t('user')),
                count: items.length
              })}
            </h2>
          </DemosCollapsibleOrganismTitle>
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
        </DemosCollapsibleOrganismItem>

        <DemosCollapsibleOrganismItem
          className='mt-2'
          color={t(`items.${fisrtItem}.color`)}
          variant={t(`items.${fisrtItem}.variant`)}
        >
          <DemosCollapsibleOrganismTitle>
            {t(`items.${fisrtItem}.title`)}
          </DemosCollapsibleOrganismTitle>
        </DemosCollapsibleOrganismItem>

        <Collapsible.Content className='mt-2 space-y-2'>
          {restItems.map((key) => (
            <DemosCollapsibleOrganismItem
              color={t(`items.${key}.color`)}
              key={key}
              variant={t(`items.${key}.variant`)}
            >
              <DemosCollapsibleOrganismTitle>
                {t(`items.${key}.title`)}
              </DemosCollapsibleOrganismTitle>
            </DemosCollapsibleOrganismItem>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </Demos>
  );
};

const DemosCollapsibleOrganismItem = ({ className, ...props }) => {
  return (
    <Box
      className={cn(
        'h-12 flex-row items-center justify-between rounded-sm px-4 py-0',
        className
      )}
      {...props}
    />
  );
};

const DemosCollapsibleOrganismTitle = ({ className, ...props }) => {
  return (
    <Text.Subtitle
      className={cn('text-sm font-normal first-letter:normal-case', className)}
      {...props}
    />
  );
};

export default DemosCollapsibleOrganism;
