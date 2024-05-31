import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import slices from './slices';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers(
  Object.values(slices).reduce(
    (obj, slice) => ({ ...obj, [slice.name]: slice.reducer }),
    {}
  )
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk]
});

const persistor = persistStore(store);

export default store;
export { store, persistor, useDispatch, useSelector };
