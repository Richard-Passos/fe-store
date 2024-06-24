import { getTranslations } from 'next-intl/server';

import { defaultLocale } from '@/navigation';
import { getParams, normId, translationKeys } from '@/utils';

const DEFAULTS = {
  page: 1,
  perPage: 25,
  type: normId('all'),
  locale: defaultLocale
};

const GET = async (req) => {
  const { searchParams } = req.nextUrl;

  const getParam = getParams(searchParams, DEFAULTS);

  const page = +getParam('page'),
    perPage = +getParam('per-page'),
    type = normId(getParam('type')),
    locale = getParam('locale');

  const t = await getTranslations({
    locale,
    namespace: ''
  });

  let results = translationKeys(t, 'products');

  if (type !== DEFAULTS.type)
    results = results.filter(
      (key) => normId(t(`products.${key}.type.value`)) === type
    );

  let data = results.slice((page - 1) * perPage, page * perPage);

  data = data.map((key) => ({
    id: key,
    type: {
      value: t(`products.${key}.type.value`),
      label: t(`products.${key}.type.label`)
    },
    isNew: {
      value: t.raw(`products.${key}.isNew.value`),
      label: t(`products.${key}.isNew.label`)
    },
    title: t(`products.${key}.title`),
    price: t.raw(`products.${key}.price`),
    thumbnailImage: {
      alt: t(`products.${key}.thumbnailImage.alt`),
      src: t(`products.${key}.thumbnailImage.src`)
    },
    mainImage: {
      alt: t(`products.${key}.mainImage.alt`),
      src: t(`products.${key}.mainImage.src`)
    }
  }));

  const totalResults = results.length;

  return Response.json({
    status: 200,
    data,
    meta: {
      page,
      totalPages: Math.ceil(totalResults / perPage),
      totalResults
    }
  });
};

export { GET };
