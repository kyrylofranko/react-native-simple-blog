import { CHANGE_POST_SCREEN, CHANGE_USER_SCREEN } from "../types";

const handlers = {
  [CHANGE_USER_SCREEN]: (state, { author }) => ({ ...state, author }),
  [CHANGE_POST_SCREEN]: (state, { id }) => ({ ...state, postId: id}),
  DEFAULT: (state) => state,
};

export const screenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
