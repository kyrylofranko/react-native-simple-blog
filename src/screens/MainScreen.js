import React, { useCallback, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Post } from "../components/Post";
import { PostsContext } from "../context/posts/postsContext";
import { AppTextBold } from "../components/ui/AppTextBold";

export const MainScreen = () => {
  const { posts, fetchPosts } = useContext(PostsContext);

  const loadPosts = useCallback(async () => await fetchPosts(), [fetchPosts]);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <View style={styles.container}>
      <AppTextBold style={styles.heading}>Feed</AppTextBold>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Post post={item} />
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
  },
  heading: {
    marginBottom: 10,
    fontSize: 22,
    alignSelf: 'flex-start',
  }
});
