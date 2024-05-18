import { useTranslations } from 'next-intl';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
import { TextDescription } from '@/components/atoms/text';
import { Popover } from '@/components/molecules';
import Combobox from '@/components/organisms/combobox';
import { cn, normId, translationKeys } from '@/utils';

import Demos from '../Root';
import ComboboxPopover from './Popover';

const DemosComboboxOrganism = ({ namespace, ...props }) => {
  const t = useTranslations(namespace);

  return (
    <>
      <Demos {...props}>
        <Combobox.Root>
          <Combobox.Trigger
            className='pointer-events-none'
            color={t('trigger.color')}
            size={t('trigger.size')}
            variant={t('trigger.variant')}
          >
            <Combobox.Value placeholder={t('trigger.placeholder')} />
          </Combobox.Trigger>

          <Combobox.Content
            className='mt-xs'
            color={t('color')}
            variant={t('variant')}
          >
            <div className='relative flex items-center'>
              <Combobox.Input
                className='pl-11'
                color={t('control.color')}
                placeholder={t('control.placeholder')}
                variant={t('control.variant')}
              />

              <Icon
                aria-hidden
                className='pointer-events-none absolute left-4 z-10 size-4'
                color={t('control.icon.color')}
                src={t('control.icon.src')}
              />
            </div>

            <Combobox.List>
              <Combobox.Empty>
                <TextDescription>{t('empty')}</TextDescription>
              </Combobox.Empty>

              {translationKeys(t, 'items').map((key) => (
                <Combobox.Item.Root
                  key={key}
                  value={normId(key)}
                >
                  <Combobox.Item.Indicator
                    className={cn(
                      'data-checked:animate-active',
                      animations[t(`items.${key}.icon.animation`)]
                    )}
                  >
                    <Icon
                      color={t(`items.${key}.icon.color`)}
                      src={t(`items.${key}.icon.src`)}
                    />
                  </Combobox.Item.Indicator>

                  <Combobox.Item.Label>
                    {t(`items.${key}.label`)}
                  </Combobox.Item.Label>
                </Combobox.Item.Root>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </Demos>

      <Demos {...props}>
        <Combobox.Root>
          <ComboboxPopover>
            <Popover.Trigger asChild>
              <Combobox.Trigger
                className='group'
                color={t('trigger.color')}
                size={t('trigger.size')}
                variant={t('trigger.variant')}
              >
                <Combobox.Value placeholder={t('trigger.placeholder')} />

                <div className='size-4 shrink-0'>
                  <Icon
                    className={cn(
                      'group-data-open:animate-active',
                      animations[t('trigger.icon.animation')]
                    )}
                    color={t('trigger.icon.color')}
                    src={t('trigger.icon.src')}
                  />
                </div>
              </Combobox.Trigger>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                asChild
                className='w-screen max-w-md p-0'
              >
                <Combobox.Content
                  className='mt-xs'
                  color={t('color')}
                  variant={t('variant')}
                >
                  <div className='relative flex items-center'>
                    <Combobox.Input
                      className='pl-11'
                      color={t('control.color')}
                      placeholder={t('control.placeholder')}
                      variant={t('control.variant')}
                    />

                    <Icon
                      aria-hidden
                      className='pointer-events-none absolute left-4 z-10 size-4'
                      color={t('control.icon.color')}
                      src={t('control.icon.src')}
                    />
                  </div>

                  <Combobox.List>
                    <Combobox.Empty>
                      <TextDescription>{t('empty')}</TextDescription>
                    </Combobox.Empty>

                    {translationKeys(t, 'items').map((key) => (
                      <Combobox.Item.Root
                        key={key}
                        value={normId(key)}
                      >
                        <Combobox.Item.Indicator
                          className={cn(
                            'data-checked:animate-active',
                            animations[t(`items.${key}.icon.animation`)]
                          )}
                        >
                          <Icon
                            color={t(`items.${key}.icon.color`)}
                            src={t(`items.${key}.icon.src`)}
                          />
                        </Combobox.Item.Indicator>

                        <Combobox.Item.Label>
                          {t(`items.${key}.label`)}
                        </Combobox.Item.Label>
                      </Combobox.Item.Root>
                    ))}
                  </Combobox.List>
                </Combobox.Content>
              </Popover.Content>
            </Popover.Portal>
          </ComboboxPopover>
        </Combobox.Root>
      </Demos>
    </>
  );
};

export default DemosComboboxOrganism;
