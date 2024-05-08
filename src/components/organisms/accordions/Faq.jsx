import { useTranslations } from 'next-intl';

import { Icon } from '@/components/atoms';
import { TextDescription } from '@/components/atoms/text';
import { Accordion } from '@/components/molecules';
import { getTranslationKeys } from '@/utils';

const AccordionsFaq = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <Accordion.Root
      color={t('color')}
      type={t('type')}
      {...props}
    >
      {getTranslationKeys(t, 'items').map((key) => (
        <Accordion.Item
          key={key}
          value={key}
        >
          <Accordion.Header>
            <Accordion.Trigger className='h-20 text-lg hover:bg-transparent'>
              {t(`items.${key}.title`)}

              <div
                aria-hidden
                className='flex aspect-square h-1/2 items-center justify-center rounded-sm transition-colors group-hover:bg-active'
              >
                <Icon
                  className='size-1/2 transition-transform duration-300 ease-backOut group-data-open:rotate-[135deg]'
                  src={t('icon')}
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content>
            <TextDescription>
              {t.rich(`items.${key}.description`)}
            </TextDescription>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionsFaq;
