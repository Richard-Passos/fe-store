import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AboutView } from '@/components/views';

const AboutPage = ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  return <AboutView {...props} />;
};

const generateMetadata = async ({ params: { locale } }) => {
  const t = await getTranslations({
    locale,
    namespace: 'pages.about.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default AboutPage;
export { generateMetadata };
