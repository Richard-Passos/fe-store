import { useTranslations } from 'next-intl';

import { Accordion } from '@/components/molecules';
import { capitalize, translationKeys } from '@/utils';
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
          {translationKeys(t, 'items').map((key, i) => (
            <Accordion.Item
              className='rounded-sm'
              color={t('color')}
              key={key}
              value={`item-${i}`}
              variant={t('variant')}
            >
              <Accordion.Trigger>
                {capitalize(t(`items.${key}.title`))}

                <Accordion.Icon
                  animation={t('trigger.icon.animation')}
                  color={t('trigger.icon.color')}
                  src={t('trigger.icon.src')}
                />
              </Accordion.Trigger>

              <Accordion.Content>
                {t.rich(`items.${key}.description`)}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Demos>
    ))
  );
};

export default DemosAccordionOrganism;
