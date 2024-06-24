import { useTranslations } from 'next-intl';
import { Suspense, forwardRef } from 'react';

import { Group } from '@/components/atoms';
import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/organisms/logo';
import { cart, cn, translationKeys } from '@/utils';

import Action from './Action';
import Drawer from './Drawer';
import SetState from './SetState';

const OrganismsHeader = ({ className, ...props }, ref) => {
  const namespace = 'header';

  const t = useTranslations(namespace),
    global = useTranslations('');

  const locales = translationKeys(global, 'locales');

  const cartLength = cart.count();

  return (
    <SetState>
      <header
        className={cn(
          'top-0 z-modal flex w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] max-w-bounds items-center justify-center gap-xs bg-primary-filled px-[5%] py-lg transition-transform duration-300 sm:fixed sm:px-[3%] sm:data-[is-visible=false]:-translate-y-full',
          className
        )}
        ref={ref}
        {...props}
      >
        <Drawer namespace={`${namespace}.drawer`} />

        <Group
          className='flex-1 max-md:hidden'
          component='nav'
          gap='xs'
        >
          {translationKeys(t, 'links').map((key) => (
            <Action
              href={t(`links.${key}.href`)}
              key={key}
            >
              {t(`links.${key}.label`)}
            </Action>
          ))}
        </Group>

        <Logo className='text-black' />

        <Group
          className='flex-1'
          gap='xs'
          justify='end'
        >
          <Suspense>
            <LocaleSelect
              className='text-black hover:text-white has-[[data-expanded]]:text-white max-md:hidden [&_*]:text-current [&_:is(input,svg)]:transition-colors [&_input]:border [&_input]:border-black [&_input]:bg-transparent [&_input]:!outline-black [&_input]:hover:bg-black focus:[&_input]:outline data-expanded:[&_input]:bg-black [&_svg]:stroke-current'
              color='black'
              data={locales.map((key) => ({
                value: key,
                label: global(`locales.${key}.label`)
              }))}
              placeholder={t('localeSelect.placeholder')}
            />
          </Suspense>

          <Action href='/cart'>{t('cart.label', { count: cartLength })}</Action>
        </Group>
      </header>
    </SetState>
  );
};

export default forwardRef(OrganismsHeader);
