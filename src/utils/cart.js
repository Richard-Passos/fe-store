import { getLocale } from 'next-intl/server';

import { getCookie, setCookie } from '@/actions';

const ID = 'cart';

const cart = {
  set: (...params) => setCookie(ID, ...params),
  get: () => {
    const cart = getCookie(ID);

    return { ...cart, value: cart.value ?? [] };
  },
  count: () => (getCookie(ID).value ?? []).length,
  getItems: async () => {
    const locale = await getLocale();

    let items = getCookie(ID).value ?? [];

    let promises = items.map((data = {}) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${data.urlId}?locale=${locale}`
      )
    );

    promises = await Promise.all(promises);

    const res = await Promise.all(promises.map((res) => res.json()));

    items = items.map(({ id, ...data }, i) => ({
      ...data,
      ...res[i]?.data,
      id
    }));

    return items;
  }
};

export default cart;
