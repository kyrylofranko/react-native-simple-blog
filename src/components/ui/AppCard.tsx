import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from "prop-types";

export const AppCard = (props) => {
  return (
    <View style={ {...styles.default, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    elevation: 6,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2}
  },
});

AppCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
