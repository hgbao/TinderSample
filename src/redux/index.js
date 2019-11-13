import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import user from './user/reducer';

const config = {
  key: 'primary',
  storage: AsyncStorage
};

const reducer = combineReducers({
  user
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

const store = createStore(persistReducer(config, rootReducer), undefined, compose(applyMiddleware(...[thunk])));

const persistor = persistStore(store);
export { persistor, store };
