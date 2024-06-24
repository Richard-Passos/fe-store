import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CartView } from '@/components/views';

const CartPage = ({ params: { locale }, ...props }) => {
  unstable_setRequestLocale(locale);

  return <CartView {...props} />;
};

const generateMetadata = async ({ params: { locale } }) => {
  const t = await getTranslations({ locale, namespace: 'pages.cart.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
};

export default CartPage;
export { generateMetadata };
