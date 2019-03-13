import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import localforage from 'localforage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: localforage,
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://github.com/rt2zz/redux-persist/issues/988
const defaultMiddleware = [...getDefaultMiddleware()];
const middleware =
  defaultMiddleware.length === 3
    ? defaultMiddleware.slice(0, -1)
    : defaultMiddleware;

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

export default store;
