import { ColorSchemeScript } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Notifications } from '@/components/molecules';
import {
  ErrorBoundary,
  Footer,
  Header,
  Providers
} from '@/components/organisms';
import '@/globals.css';
import { locales } from '@/navigation';

const Layout = ({ params: { locale }, children }) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      className='overflow-x-clip scroll-smooth has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
    >
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>

      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip'>
        <Providers>
          <Header.Root />

          <ErrorBoundary>
            <Header.State>
              <main className='relative flex w-full max-w-bounds flex-col items-center'>
                {children}
              </main>
            </Header.State>
          </ErrorBoundary>

          <Footer />

          <Notifications />
        </Providers>
      </body>
    </html>
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: 'personal' });

  return {
    title: {
      default: t('name'),
      template: `%s - ${t('name')}`
    },
    description: t('description'),
    icons: {
      icon: t('logo.favicon')
    },
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
