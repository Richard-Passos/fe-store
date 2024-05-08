import { getLocale, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { NotFoundView } from '@/components/views';

const NotFoundPage = async (props) => {
  const locale = await getLocale();

  unstable_setRequestLocale(locale);

  return (
    <NotFoundView
      {...props}
    />
  );
};

const generateMetadata = async () => {
  const locale = await getLocale();

  const t = await getTranslations({locale, namespace: 'pages.notFound.metadata'})

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
};

export default NotFoundPage;
export { generateMetadata };
