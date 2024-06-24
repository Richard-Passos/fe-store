'use server';

import { cookies } from 'next/headers';

const getCookie = (id) => {
  const cookie = cookies().get(id) ?? {};

  return { ...cookie, value: JSON.parse(cookie.value ?? null) };
};

export default getCookie;
