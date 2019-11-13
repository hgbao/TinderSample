import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as RNLocalize from 'react-native-localize';

import LoadingView from '@components/LoadingView';
import AppNavigator from '@navigation/AppNavigator';
import { persistor, store } from '@redux';
import { LanguageConfig } from '@config';

const App = () => {
  useEffect(() => {
    LanguageConfig.setI18nConfig();
    RNLocalize.addEventListener('change', () => {
      LanguageConfig.setI18nConfig();
    });
    return RNLocalize.removeEventListener('change');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
