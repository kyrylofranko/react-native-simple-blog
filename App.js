import React, { useState } from 'react';
import { PostsState } from "./src/context/posts/PostsState";
import { loadFonts } from "./src/helpers/loadFonts";
import { AppLoading } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Footer } from "./src/components/Footer";


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
    <NavigationContainer>
      <PostsState>
        <AppNavigation/>
      </PostsState>
      <Footer/>
    </NavigationContainer>
  );
}
