import { unstable_setRequestLocale } from 'next-intl/server';

import { SingleProductView } from '@/components/views';

const SingleProductPage = ({ params: { locale, id }, ...props }) => {
  unstable_setRequestLocale(locale);

  return (
    <SingleProductView
      id={id}
      {...props}
    />
  );
};

const generateMetadata = async ({ params: { locale, id } }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}?locale=${locale}`;

  const res = await fetch(url, { cache: 'no-store' });

  const data = (await res.json()).data ?? {};

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description
    }
  };
};

export default SingleProductPage;
export { generateMetadata };
