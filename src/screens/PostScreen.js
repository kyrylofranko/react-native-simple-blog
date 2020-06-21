import React, { useCallback, useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
import { ScreenContext } from "../context/screen/screenContext";
import { PostsContext } from "../context/posts/postsContext";
import { AppText } from "../components/ui/AppText";
import { Comment } from "../components/Comment";
import { THEME } from "../theme";

export const PostScreen = () => {
  const { postId, changeUserScreen } = useContext(ScreenContext);
  const { posts } = useContext(PostsContext);
  const post = posts.find(t => t.id === postId);

  const onUserScreen = useCallback(
    () => changeUserScreen(post.author),
    [changeUserScreen, post]
  );

  return (
    <View>
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
