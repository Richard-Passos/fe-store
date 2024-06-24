import { NextIntlClientProvider, useMessages } from 'next-intl';

import { pick } from '@/utils';

const OrganismsProvidersUi = (props) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={pick(messages, ['pages.error'])}
      {...props}
    />
  );
};

export default OrganismsProvidersUi;
