import React, { useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Post } from "../components/Post";
import { THEME } from "../theme";
import { ProfileScreenProps } from '../navigation/types';
import { useSelector } from 'react-redux';
import { getPosts } from '../store';

export const UserScreen = ({ route }: ProfileScreenProps) => {
  const { author } = route.params;
  const posts = useSelector(getPosts);
  const authorPosts = useMemo(
    () => posts.filter((post: Post) => post.author === author),
    [posts, author]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={authorPosts}
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
    paddingHorizontal: THEME.MAIN_PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
