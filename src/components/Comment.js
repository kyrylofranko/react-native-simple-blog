import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AppTextBold } from "./ui/AppTextBold";
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";

export const Comment = ({ comment, onUserScreen }) => {
  return (
    <View style={styles.comment}>
      <View style={styles.authorWrap}>
        <Entypo name='user' size={25} />
        <AppTextBold
          style={styles.author}
          onPress={onUserScreen}
        >
          {comment.author}
        </AppTextBold>
      </View>
      <AppText style={styles.body}>{comment.body}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    width: Dimensions.get('window').width - THEME.MAIN_PADDING_HORIZONTAL * 2,
    marginBottom: 10,
    padding: 10,
    height: 100,
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
  },
  body: {
    marginTop: 10,
  },
});
