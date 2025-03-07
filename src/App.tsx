import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import AppContainer from './navigation/AppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/toast';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
      SplashScreen.show()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
        <Toast config={toastConfig}/>
      </PersistGate>
    </Provider>
  )
}

export default App