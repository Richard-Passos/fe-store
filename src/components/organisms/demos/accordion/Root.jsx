import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
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

  return ACCORDION.map((variants, i) =>
    variantsComb(variants).map((variants, idx) => (
      <Demos
        key={`${i}${idx}`}
        variants={variants}
        {...props}
      >
        <Accordion.Root {...variants}>
          {translationKeys(t, 'items').map((key) => (
            <Accordion.Item
              className='rounded-sm'
              color={t('color')}
              key={key}
              value={`item-${key}`}
            >
              <Accordion.Header>
                <Accordion.Trigger>
                  {capitalize(t(`items.${key}.title`))}

                  <div className='size-4'>
                    <Icon
                      className={cn(
                        'group-data-open:animate-active',
                        animations[normKey(t('icon.animation'))]
                      )}
                      color={t('icon.color')}
                      src={t('icon.src')}
                    />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content>
                <TextDescription>
                  {t(`items.${key}.description`)}
                </TextDescription>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Demos>
    ))
  );
};

export default DemosAccordionOrganism;
