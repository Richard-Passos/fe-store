'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';

const OrganismsProvidersStore = ({ children, persistGateProps, ...props }) => {
  return (
    <Provider
      store={store}
      {...props}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
        {...persistGateProps}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default OrganismsProvidersStore;
