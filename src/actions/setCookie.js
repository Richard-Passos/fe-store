'use server';

import { cookies } from 'next/headers';

const setCookie = (id, data, options) => {
  cookies().set(id, JSON.stringify(data), options);
};

export default setCookie;
