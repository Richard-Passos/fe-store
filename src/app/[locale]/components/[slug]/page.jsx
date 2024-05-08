import { SingleComponentView } from '@/components/views'
import { normKey } from '@/utils';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

const SingleComponentPage = async ({ params: { locale, slug }, ...props }) => {
  unstable_setRequestLocale(locale);

  return <SingleComponentView
  slug={slug}
  {...props}
  />
};

const generateMetadata = async ({ params: { locale, slug } }) => {
  const t = await getTranslations({locale, namespace: `components.${normKey(slug)}`})

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
};

export default SingleComponentPage;
export { generateMetadata }
