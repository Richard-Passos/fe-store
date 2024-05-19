import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Box, Button, Icon } from '@/components/atoms';
import { TextDescription } from '@/components/atoms/text';
import { Accordion } from '@/components/molecules';
import { capitalize, cn, normKey, translationKeys } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ACCORDION = [
  {
    type: ['single'],
    collapsible: [true, false],
    defaultValue: [null, 'item-0']
  },
  {
    type: ['multiple'],
    defaultValue: [[], ['item-0'], ['item-1', 'item-2']]
  }
];

const DemosAccordionOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return ACCORDION.map((variants) =>
    variantsComb(variants).map((variants, i) => (
      <Demos
        key={i}
        variants={variants}
        {...props}
      >
        <Accordion.Root {...variants}>
          {translationKeys(t, 'items').map((key) => (
            <Accordion.Item
              asChild
              key={key}
              value={`item-${key}`}
            >
              <Box
                className='rounded-sm p-0'
                color={t('color')}
                variant={t('variant')}
              >
                <Accordion.Header>
                  <Accordion.Trigger asChild>
                    <Button
                      className='group w-full justify-between rounded-none border-0 text-start'
                      color={t('trigger.color')}
                      size={t('trigger.size')}
                      variant={t('trigger.variant')}
                    >
                      {capitalize(t(`items.${key}.title`))}

                      <div className='size-4'>
                        <Icon
                          className={cn(
                            'group-data-open:animate-active',
                            animations[normKey(t('trigger.icon.animation'))]
                          )}
                          color={t('trigger.icon.color')}
                          src={t('trigger.icon.src')}
                        />
                      </div>
                    </Button>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <TextDescription
                    asChild
                    className='p-md text-sm'
                  >
                    <div>{t.rich(`items.${key}.description`)}</div>
                  </TextDescription>
                </Accordion.Content>
              </Box>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Demos>
    ))
  );
};

export default DemosAccordionOrganism;
