import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
import { TextDescription } from '@/components/atoms/text';
import { Accordion } from '@/components/molecules';
import { capitalize, cn, normKey, translationKeys } from '@/utils';

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
          value={key}
        >
          <Accordion.Header>
            <Accordion.Trigger className='h-20 text-lg hover:bg-transparent'>
              {capitalize(t(`items.${key}.title`))}

              <div
                aria-hidden
                className='flex aspect-square h-1/2 items-center justify-center rounded-sm transition-colors group-hover:bg-active'
              >
                <Icon
                  className={cn(
                    'group-data-open:animate-active size-1/2',
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
              {t.rich(`items.${key}.description`)}
            </TextDescription>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionsFaq;
