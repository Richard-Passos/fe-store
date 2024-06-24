import { getTranslations } from 'next-intl/server';

import { defaultLocale } from '@/navigation';
import { getParams, normKey, translationKeys } from '@/utils';

const DEFAULTS = {
  locale: defaultLocale
};

const GET = async (req, { params: { id } }) => {
  id = normKey(id);

  const { searchParams } = req.nextUrl;

  const getParam = getParams(searchParams, DEFAULTS);

  const locale = getParam('locale');

  const t = await getTranslations({
      locale,
      namespace: `products.${id}`
    }),
    gt = await getTranslations({ locale, namespace: '' });

  const items = translationKeys(gt, 'products');

  const data = {
    id,
    type: {
      value: t('type.value'),
      label: t('type.label')
    },
    isNew: {
      value: t.raw('isNew.value'),
      label: t('isNew.label')
    },
    title: t('title'),
    description: t('description'),
    price: t.raw('price'),
    sizes: translationKeys(t, 'sizes').reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          label: t(`sizes.${key}.label`),
          quantity: t.raw(`sizes.${key}.quantity`)
        }
      }),
      {}
    ),
    thumbnailImage: {
      alt: t('thumbnailImage.alt'),
      src: t('thumbnailImage.src')
    },
    mainImage: {
      alt: t('mainImage.alt'),
      src: t('mainImage.src')
    },
    galleryImages: translationKeys(t, 'galleryImages').reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          alt: t(`galleryImages.${key}.alt`),
          src: t(`galleryImages.${key}.src`)
        }
      }),
      {}
    )
  };

  const dataIdx = items.findIndex((key) => key === id);

  const adjacentIds = {
    prev: items.at(dataIdx - 1),
    next: items.at(dataIdx < items.length - 1 ? dataIdx + 1 : 0)
  };

  return Response.json({
    status: 200,
    data,
    meta: { adjacentIds }
  });
};

export { GET };
