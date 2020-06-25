import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const AppText = ({ style, children, onPress}: AppTextProps) => {
  return (
    <Text style={{...styles.default, ...style}} onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'helvetica-regular',
  }
});
