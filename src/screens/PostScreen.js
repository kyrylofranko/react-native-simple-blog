import React, { useCallback, useContext, useMemo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
import { PostsContext } from "../context/posts/postsContext";
import { AppText } from "../components/ui/AppText";
import { Comment } from "../components/Comment";
import { THEME } from "../theme";

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const { posts } = useContext(PostsContext);
  const post = useMemo(
    () => posts.find(t => t.id === postId),
    [posts, postId]
  );

  const onUserScreen = useCallback(
    () => navigation.navigate('Profile', {
      author: post.author,
    }),
    [navigation]
  );

  return (
    <View style={styles.container}>
      <AppCard>
        <View style={styles.cardTop}>
          <View style={styles.authorWrap}>
            <EvilIcons name='user' size={30} />
            <AppTextBold
              style={styles.author}
              onPress={onUserScreen}
            >
              {post.author}
            </AppTextBold>
          </View>
          <AppTextBold style={styles.title}>{post.title}</AppTextBold>
        </View>
        <AppText>{post.body}</AppText>
      </AppCard>
      <View style={styles.commentsBlock}>
        <AppTextBold style={styles.commentsTitle}>Comments</AppTextBold>
        {post.comments.length
        ? (<FlatList
            data={post.comments}
            initialNumToRender={3}
            windowSize={10}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Comment comment={item} onUserScreen={onUserScreen} />
            )}
          />)
        : (
            <View style={styles.noComments}>
              <FontAwesome5
                name='comments'
                size={70}
                color={THEME.MAIN_COLOR}
              />
            </View>
          )}
      </View>
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
  cardTop: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorWrap: {
    alignItems: 'center',
  },
  author: {
    marginLeft: 5,
    color: '#1b4f72',
  },
  title: {
    width: '80%',
    fontSize: 14,
  },
  commentsBlock: {
    alignItems: 'center',
  },
  commentsTitle: {
    marginVertical: 20,
    fontSize: 20,
  },
  noComments: {
    opacity: 0.5,
  }
});
