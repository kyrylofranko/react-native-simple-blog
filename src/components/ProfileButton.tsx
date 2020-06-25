import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppButton } from "./ui/AppButton";
import { THEME } from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getUsers } from '../store';

export const ProfileButton = () => {
  const users = useSelector(getUsers);
  const navigation = useNavigation();

  const handleProfileClick = useCallback(
    () => navigation.navigate('Profile', {
      author: users[1].username,
    }),
    [navigation, users]
  );
  return (
    <View style={styles.profile}>
      <AppButton
        bgColor={THEME.MAIN_COLOR}
        onPress={handleProfileClick}
      >
        <FontAwesome name='user-circle' size={25} />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginRight: 13,
  }
});
