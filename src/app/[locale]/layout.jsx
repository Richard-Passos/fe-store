import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

import { ErrorBoundary, GlobalProviders } from '@/components/atoms';
import { ToastProvider, ToastViewport } from '@/components/molecules/toast';
import { Footer, Header, Toaster } from '@/components/organisms';
import { locales } from '@/navigation';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      className='overflow-x-clip scroll-smooth'
      lang={locale}
      suppressHydrationWarning
    >
      <GlobalProviders.State>
        <GlobalProviders.Icon>
          <ToastProvider>
            <Header.State>
              <body
                className={cn(
                  'relative !mr-0 flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app',
                  font.variable
                )}
                id='start'
              >
                <GlobalProviders.Theme>
                  <Header.Root />

                  <ErrorBoundary.Provider>
                    <ErrorBoundary.Root>
                      <main className='relative flex w-full max-w-bounds flex-col items-center'>
                        {children}
                      </main>
                    </ErrorBoundary.Root>
                  </ErrorBoundary.Provider>

                  <Footer />

                  <Toaster />

                  <ToastViewport />
                </GlobalProviders.Theme>
              </body>
            </Header.State>
          </ToastProvider>
        </GlobalProviders.Icon>
      </GlobalProviders.State>
    </html>
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: 'personalInfo' });

  return {
    title: {
      default: `${t('name.first')} ${t('name.last')}`,
      template: `%s — ${t('name.first')} ${t('name.last')}`
    },
    icon: t('favicon'),
    description: t('description'),
    openGraph: {
      title: `${t('name.first')} ${t('name.last')} — ${t('summary')}`,
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
