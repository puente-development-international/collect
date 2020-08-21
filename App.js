// REACT
import React, { createContext, useState, useMemo } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import MainNavigation from './components/MainNavigation';

// REDUX
import configureStore from './modules/state-management/configure-store';

// STYLING
import theme from './modules/theme';

const store = configureStore();
export const LocalizationContext = createContext();

export default function App() {
  const [locale, setLocale] = useState(Localization.locale);
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <LocalizationContext.Provider value={localizationContext}>
          <MainNavigation />
        </LocalizationContext.Provider>
      </PaperProvider>
    </StoreProvider>
  );
}

// export default App;
