import React, { useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { AppCommentsBtn } from "./ui/AppCommentsBtn";
import { THEME } from "../theme";
import { ScreenContext } from "../context/screen/screenContext";

export const Post = ({ post }) => {
  const { changePostScreen, changeUserScreen } = useContext(ScreenContext);

  const onUserScreen = useCallback(
    () => changeUserScreen(post.author),
    [changeUserScreen, post]
  );

  const onPostScreen = useCallback(
    () => changePostScreen(post.id),
    [changePostScreen, post]
  );

  return (
    <View style={styles.post}>
      <View style={styles.authorWrap}>
        <EvilIcons name='user' size={25} />
        <AppTextBold
          style={styles.author}
          onPress={onUserScreen}
        >
          {post.author}
        </AppTextBold>
      </View>
      <AppTextBold style={styles.title}>{post.title}</AppTextBold>
      <AppText
        onPress={onPostScreen}
      >
        {post.body}
      </AppText>
      <View style={styles.commentsBtn}>
        <AppCommentsBtn onPress={onPostScreen}>
            <AppText style={styles.commentsText}>Comments</AppText>
            <FontAwesome
            name='comments'
            size={17}
            color={THEME.MAIN_COLOR}
          />
        </AppCommentsBtn>
        <View style={styles.indicator}>
          <AppText style={styles.indicatorValue}>{post.comments.length}</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 10,
    padding: 10,
    height: 190,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  authorWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    marginLeft: 5,
    color: '#1b4f72',
    fontSize: 14,
  },
  title: {
    marginVertical: 10,
    fontSize: 16,
  },
  commentsBtn: {
    position: 'relative',
    marginTop: 5,
    width: 100,
    alignSelf: 'flex-end',
  },
  commentsText: {
    paddingTop: 4,
    marginRight: 3,
    color: THEME.MAIN_COLOR,
  },
  indicator: {
    paddingLeft: 1,
    width: 13,
    height: 13,
    position: 'absolute',
    right: 1,
    top: 0,
    alignItems: 'center',
    backgroundColor: THEME.INDICATOR_BACKGROUND,
    borderRadius: 50,
  },
  indicatorValue: {
    fontSize: 10,
    lineHeight: 13,
    color: '#fff',
  }
});
