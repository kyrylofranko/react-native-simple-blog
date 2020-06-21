import React, { useCallback, useContext, useEffect } from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";
import { ScreenContext } from "../context/screen/screenContext";
import { AppButton } from "./ui/AppButton";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { PostsContext } from "../context/posts/postsContext";

export const Navbar = () => {
  const {
    postId,
    author,
    changePostScreen,
    changeUserScreen
  } = useContext(ScreenContext);
  const { users, fetchUsers } = useContext(PostsContext);

  const loadUsers = useCallback(async () => await fetchUsers(), [fetchUsers]);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={{
      ...styles.nav,
      ...Platform.select({
        ios: styles.navIos,
        android: styles.navAndroid,
      })}}>
      {(postId || author) && (
        <View style={styles.backBtn}>
          <AppButton
            bgColor={THEME.MAIN_COLOR}
            onPress={() => {
              changePostScreen(null)
              changeUserScreen(null)
            }}
          >
            <AntDesign name='back' size={20} />
          </AppButton>
        </View>
      )}
      <AppText style={styles.text}>Simple Blog</AppText>
      <View style={styles.profile}>
        <AppButton
          bgColor={THEME.MAIN_COLOR}
          onPress={() => {
            changeUserScreen(users[1].username)
          }}
        >
          <FontAwesome name='user-circle' size={25} />
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 85,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_COLOR,
  },
  navAndroid: {
    paddingBottom: 20,
  },
  navIos: {
    paddingBottom: Dimensions.get('window').width > 375 ? 10 : 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  backBtn: {
    position: 'absolute',
    bottom: Dimensions.get('window').width > 375 ? 3 : 10,
    left: 5,
  },
  profile: {
    position: 'absolute',
    bottom: Dimensions.get('window').width > 375 ? 3 : 10,
    right: 5,
  }
});
