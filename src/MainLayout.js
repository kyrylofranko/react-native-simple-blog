import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from "./screens/MainScreen";
import { Navbar } from "./components/Navbar";
import { PostScreen } from "./screens/PostScreen";
import { ScreenContext } from "./context/screen/screenContext";
import { Footer } from "./components/Footer";
import { THEME } from "./theme";
import { UserScreen } from "./screens/UserScreen";

export const MainLayout = () => {
  const { postId, author } = useContext(ScreenContext);

  let content = <MainScreen />;

  if (postId) {
    content = <PostScreen />;
  }

  if (author) {
    content = <UserScreen />;
  }

  return (
    <View style={styles.wrap}>
      <Navbar />
      <View style={styles.container}>
        {content}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: THEME.MAIN_PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
