import { MantineProvider } from '@mantine/core';

import theme from '@/theme';

const OrganismsProvidersUi = (props) => {
  return (
    <MantineProvider
      defaultColorScheme='auto'
      theme={theme}
      {...props}
    />
  );
};

export default OrganismsProvidersUi;
