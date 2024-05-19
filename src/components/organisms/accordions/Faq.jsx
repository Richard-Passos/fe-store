import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Box, Button, Icon } from '@/components/atoms';
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
          asChild
          key={key}
          value={`item-${key}`}
        >
          <Box
            className='p-0'
            color={t('color')}
            variant={t('variant')}
          >
            <Accordion.Header>
              <Accordion.Trigger asChild>
                <Button
                  className='group h-20 w-full justify-between rounded-none border-0 text-start hover:bg-transparent'
                  color='inherit'
                  size='lg'
                  varian='solid'
                >
                  {capitalize(t(`items.${key}.title`))}

                  <Button
                    asChild
                    className='aspect-square h-1/2 px-0 group-hover:bg-active'
                    color='inherit'
                    variant='ghost'
                  >
                    <div>
                      <Icon
                        className={cn(
                          'size-1/2 group-data-open:animate-active',
                          animations[normKey(t('trigger.icon.animation'))]
                        )}
                        color={t('trigger.icon.color')}
                        src={t('trigger.icon.src')}
                      />
                    </div>
                  </Button>
                </Button>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content>
              <TextDescription
                asChild
                className='px-lg py-md text-sm'
              >
                <div>{t.rich(`items.${key}.description`)}</div>
              </TextDescription>
            </Accordion.Content>
          </Box>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionsFaq;
