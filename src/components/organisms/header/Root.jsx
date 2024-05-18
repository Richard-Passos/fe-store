import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

import { Box, Separator } from '@/components/atoms';
import { LocaleChanger, Logo, ThemeChanger } from '@/components/molecules';
import { cn } from '@/utils';

import SetState from './SetState';
import Menu from './menu';

const Header = ({ className, ...props }) => {
  const t = useTranslations();

  return (
    <SetState>
      <Box
        asChild
        className={cn(
          'z-10 grid w-full max-w-bounds grid-cols-2 items-center border-transparent px-[5%] shadow-none sm:grid-cols-3',
          className
        )}
        {...props}
      >
        <header>
          <Menu />

          <Logo className='justify-self-end sm:justify-self-center' />

          <div className='flex gap-1 justify-self-end max-sm:hidden'>
            <ThemeChanger
              color='inherit'
              items={t.raw('themes')}
              size='xs'
              variant='solid'
            />

            <Separator
              className='h-auto rotate-12'
              orientation='vertical'
            />

            <Suspense>
              <LocaleChanger
                color='inherit'
                items={t.raw('locales')}
                size='xs'
                variant='solid'
              />
            </Suspense>
          </div>
        </header>
      </Box>
    </SetState>
  );
};

export default Header;
