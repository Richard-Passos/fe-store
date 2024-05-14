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
      color={t('color')}
      type={t('type')}
      variant={t('variant')}
      {...props}
    >
      {translationKeys(t, 'items').map((key) => (
        <Accordion.Item
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
                    'size-1/2 group-data-open:animate-[--anim]',
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
