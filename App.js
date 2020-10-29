// REACT
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import MainNavigation from './components/MainNavigation';

// REDUX
import configureStore from './modules/state-management/configure-store';
import useCachedResources from './modules/cached-resources/useCachedResources';

// STYLING
import { theme } from './modules/theme';

const store = configureStore();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <MainNavigation />
      </PaperProvider>
    </StoreProvider>
  );
}
