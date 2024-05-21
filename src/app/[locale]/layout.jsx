import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

import { ErrorBoundary, GlobalProviders } from '@/components/atoms';
import { ToastViewport } from '@/components/molecules/toast';
import { Footer, Header, Toaster } from '@/components/organisms';
import { locales } from '@/navigation';
import '@/styles/globals.css';
import { cn, translationKeys } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations();

  return (
    <html
      className='overflow-x-clip scroll-smooth'
      lang={locale}
      suppressHydrationWarning
    >
      <GlobalProviders.State>
        <GlobalProviders.Icon>
          <GlobalProviders.Toast>
            <Header.State>
              <body
                className={cn(
                  'relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app text-content [:is(&,&[data-scroll-locked])]:!mr-0',
                  font.variable
                )}
                id='top'
              >
                <GlobalProviders.Theme themes={translationKeys(t, 'themes')}>
                  <Header.Root />

                  <ErrorBoundary>
                    <main className='relative my-auto flex w-full max-w-bounds flex-col items-center'>
                      {children}
                    </main>
                  </ErrorBoundary>

                  <Footer />

                  <Toaster />

                  <ToastViewport />
                </GlobalProviders.Theme>
              </body>
            </Header.State>
          </GlobalProviders.Toast>
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
      template: `%s - ${t('name.first')} ${t('name.last')}`
    },
    icon: t('favicon'),
    description: t('description'),
    openGraph: {
      title: `${t('name.first')} ${t('name.last')} - ${t('summary')}`,
      description: t('description')
    }
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
