import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { locales } from '@/navigation';
import rich from '@/rich';
import { normKey } from '@/utils';

const i18nConfig = getRequestConfig(async ({ locale }) => {
  locale = normKey(locale);

  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`@/data/${locale}.json`))?.default,
    getMessageFallback() {
      return null;
    },
    onError(error) {
      if (error.code !== 'INVALID_MESSAGE' && error.code !== 'MISSING_MESSAGE')
        console.log(error);

      return error;
    },
    defaultTranslationValues: rich
  };
});

export default i18nConfig;
