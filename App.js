import React, { useState } from 'react';
import { PostsState } from "./src/context/posts/PostsState";
import { MainLayout } from "./src/MainLayout";
import { loadFonts } from "./src/helpers/loadFonts";
import { AppLoading } from "expo";
import { ScreenState } from "./src/context/screen/ScreenState";

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
    <ScreenState>
      <PostsState>
        <MainLayout/>
      </PostsState>
    </ScreenState>
  );
}
