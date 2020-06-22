import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { ScreenContext } from "../context/screen/screenContext";
import { PostsContext } from "../context/posts/postsContext";
import { Post } from "../components/Post";

export const UserScreen = () => {
  const { author } = useContext(ScreenContext);
  const { posts } = useContext(PostsContext);
  const authorPosts = posts.filter(post => post.author === author);

  return (
    <View>
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
