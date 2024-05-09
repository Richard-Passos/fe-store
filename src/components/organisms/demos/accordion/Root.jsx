import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { Accordion } from '@/components/molecules';
import { capitalize, cn, translationKeys } from '@/utils';
import variantsComb from '@/utils/variantsComb';

import Demos from '../Root';

const ACCORDION = [
  {
    mode: ['single'],
    collapsible: [true, false],
    defaultValue: [null, 'item-0']
  },
  {
    mode: ['multiple'],
    defaultValue: [[], ['item-0'], ['item-1', 'item-2']]
  }
];

const DemosAccordionOrganism = ({ namespace, className, ...props }) => {
  const t = useTranslations(namespace);

  return ACCORDION.map((variants, i) =>
    variantsComb(variants).map((variants, idx) => (
      <Demos
        className={cn(
          'max-w-none basis-full sm:max-w-[50%] sm:basis-1/3',
          className
        )}
        key={`${i}${idx}`}
        variants={variants}
        {...props}
      >
        <Accordion.Root
          className='rounded-sm'
          color={t('color')}
          type={t('type')}
          {...variants}
        >
          {translationKeys(t, 'items').map((key) => (
            <Accordion.Item
              key={key}
              value={`item-${key}`}
            >
              <Accordion.Header>
                <Accordion.Trigger>
                  {capitalize(t(`items.${key}.title`))}

                  <div className='size-4'>
                    <Icon
                      aria-hidden
                      src={t('icon')}
                    />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content>
                {t(`items.${key}.description`)}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Demos>
    ))
  );
};

export default DemosAccordionOrganism;
