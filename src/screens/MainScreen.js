import React, { useCallback, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Post } from "../components/Post";
import { PostsContext } from "../context/posts/postsContext";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const { posts, fetchPosts, fetchUsers } = useContext(PostsContext);

  useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  const loadPosts = useCallback(async () => await fetchPosts(), [fetchPosts]);
  const loadUsers = useCallback(async () => await fetchUsers(), [fetchUsers]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        initialNumToRender={5}
        windowSize={10}
        contentContainerStyle={{ paddingHorizontal: THEME.MAIN_PADDING_HORIZONTAL, }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Post post={item} navigation={navigation} />
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
});
