import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ScreenContext } from "./screenContext";
import { screenReducer } from "./screenReducer";
import { CHANGE_POST_SCREEN, CHANGE_USER_SCREEN } from "../types";

export const ScreenState = ({ children }) => {
  const initialState = {
    postId: null,
    author: null,
  };
  const [state, dispatch] = useReducer(screenReducer, initialState);

  const changePostScreen = (id) => dispatch(
    { type: CHANGE_POST_SCREEN, id }
  );

  const changeUserScreen = (author) => dispatch(
    { type: CHANGE_USER_SCREEN, author }
  );

  return (
    <ScreenContext.Provider value={{
      changePostScreen,
      changeUserScreen,
      postId: state.postId,
      author: state.author,
    }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

ScreenState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
