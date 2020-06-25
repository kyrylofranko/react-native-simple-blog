import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Post } from "../components/Post";
import { THEME } from "../theme";
import { getError, getLoading, getPosts, loadPosts, loadUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { AppLoader } from '../components/ui/AppLoader';
import { AppText } from '../components/ui/AppText';
import { AppButton } from '../components/ui/AppButton';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const isLoading = useSelector(getLoading);
  const hasError = useSelector(getError);

  const loadData = useCallback(
    () => {
      dispatch(loadPosts());
      dispatch(loadUsers());
    },
    [loadPosts, loadUsers]
  );

  useEffect(() => loadData(), []);

  if (isLoading) {
    return <AppLoader />;
  }

  if (hasError) {
    return (
        <View style={styles.center}>
          <AppText style={styles.error}>
            Oops, something went wrong...
          </AppText>
          <AppButton onPress={loadData}>Try again</AppButton>
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        initialNumToRender={5}
        windowSize={10}
        contentContainerStyle={{ paddingHorizontal: THEME.MAIN_PADDING_HORIZONTAL, }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Post {...item} />
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    marginBottom: 10,
    fontSize: 16,
    color: THEME.DANGER_COLOR,
  }
});
