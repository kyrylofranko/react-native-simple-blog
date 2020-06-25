import React, { useState } from 'react';
import { loadFonts } from "./src/helpers/loadFonts";
import { AppLoading } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Footer } from "./src/components/Footer";
import { Provider } from "react-redux";
import store from "./src/store";


export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading
      startAsync={loadFonts}
      onError={() => 'Error'}
      onFinish={() => setIsReady(true)}
    />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppNavigation/>
        <Footer/>
      </NavigationContainer>
    </Provider>
  );
}
