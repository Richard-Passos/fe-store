import { useTranslations } from 'next-intl';

import { Accordion } from '@/components/molecules';
import { capitalize, normId, translationKeys } from '@/utils';

const AccordionsFaq = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Accordion.Root
      collapsible={t.raw('collapsible')}
      type={t('type')}
      {...props}
    >
      {translationKeys(t, 'items').map((key) => (
        <Accordion.Item
          color={t('color')}
          key={key}
          value={normId(key)}
          variant={t('variant')}
        >
          <Accordion.Trigger className='h-20'>
            {capitalize(t(`items.${key}.title`))}

            <Accordion.Icon
              animation={t('trigger.icon.animation')}
              className='[&_svg]:size-1/2'
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
  );
};

export default AccordionsFaq;
