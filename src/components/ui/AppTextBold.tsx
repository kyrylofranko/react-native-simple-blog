import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const AppTextBold = ({ children, style, onPress}: AppTextBoldProps) => {
  return (
    <Text style={{...styles.default, ...style}} onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'helvetica-bold',
  }
});
