import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Box, Icon, Text } from '@/components/atoms';
import { TextTitle } from '@/components/atoms/text';
import { Collapsible } from '@/components/molecules';
import { cn, normId, translationKeys } from '@/utils';

const DemosCollapsibleOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  const items = translationKeys(t, 'items');

  const [fisrtItem, ...restItems] = items;

  return (
    <Collapsible.Root
      className={cn('w-full max-w-sm', className)}
      {...props}
    >
      <Box
        className='h-12 flex-row items-center justify-between gap-4 rounded-sm px-4 py-0'
        variant='clean'
      >
        <TextTitle className='text-sm font-medium first-letter:normal-case'>
          {t('title', {
            user: normId(t('user')),
            count: items.length
          })}
        </TextTitle>
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
      </Box>

      <Box className='mt-2 h-12 justify-center rounded-sm py-0'>
        <Text.Subtitle className='text-sm font-normal first-letter:normal-case'>
          {t(`items.${fisrtItem}.title`)}
        </Text.Subtitle>
      </Box>

      <Collapsible.Content className='mt-2 flex flex-col gap-2'>
        {restItems.map((key) => (
          <Box
            className='h-12 justify-center rounded-sm py-0'
            key={key}
          >
            <Text.Subtitle className='text-sm font-normal first-letter:normal-case'>
              {t(`items.${key}.title`)}
            </Text.Subtitle>
          </Box>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default DemosCollapsibleOrganism;
