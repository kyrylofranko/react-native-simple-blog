import React, { useContext, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PostsContext } from "../context/posts/postsContext";
import { Post } from "../components/Post";
import { THEME } from "../theme";

export const UserScreen = ({ route }) => {
  const { author } = route.params;
  const { posts } = useContext(PostsContext);
  const authorPosts = useMemo(
    () => posts.filter(post => post.author === author),
    [posts, author]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={authorPosts}
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
    paddingHorizontal: THEME.MAIN_PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
