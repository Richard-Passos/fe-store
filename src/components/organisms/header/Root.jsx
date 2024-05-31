import { useTranslations } from 'next-intl';
import { Suspense, forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import {
  ActionIcon,
  LocaleToggle,
  ThemeToggle,
  Tooltip
} from '@/components/molecules';
import Logo from '@/components/organisms/logo';
import { cn, translationKeys } from '@/utils';

import SetState from './SetState';

const OrganismsHeader = ({ className, ...props }, ref) => {
  const t = useTranslations('header'),
    global = useTranslations('');

  const themes = translationKeys(global, 'themes'),
    locales = translationKeys(global, 'locales');

  return (
    <SetState>
      <header
        className={cn(
          'relative z-40 flex w-full max-w-bounds flex-wrap items-center justify-between gap-md px-[5%] py-xl',
          className
        )}
        ref={ref}
        {...props}
      >
        <Logo />

        <section className='flex items-center gap-xs'>
          <Tooltip label={t('themeToggle.label')}>
            <ThemeToggle.Root
              asChild
              values={themes}
            >
              <ActionIcon variant='default'>
                {translationKeys(global, 'themes').map((key) => (
                  <ThemeToggle.Item
                    className='size-2/3'
                    key={key}
                    value={key}
                  >
                    <Icon src={global(`themes.${key}.icon`)} />
                  </ThemeToggle.Item>
                ))}
              </ActionIcon>
            </ThemeToggle.Root>
          </Tooltip>

          <Suspense>
            <Tooltip label={t('localeToggle.label')}>
              <LocaleToggle.Root
                asChild
                values={locales}
              >
                <ActionIcon variant='default'>
                  {locales.map((key) => (
                    <LocaleToggle.Item
                      className='text-sm'
                      key={key}
                      value={key}
                    >
                      {key}
                    </LocaleToggle.Item>
                  ))}
                </ActionIcon>
              </LocaleToggle.Root>
            </Tooltip>
          </Suspense>
        </section>
      </header>
    </SetState>
  );
};

export default forwardRef(OrganismsHeader);
