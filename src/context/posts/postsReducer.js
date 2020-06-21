import { FETCH_POSTS, FETCH_USERS, FINISH_LOADING, START_LOADING } from "../types";

const handlers = {
  [START_LOADING]: (state) => ({ ...state, loading: true }),
  [FINISH_LOADING]: (state) => ({ ...state, loading: false }),
  [FETCH_POSTS]: (state, { preparedPosts }) => ({ ...state, posts: preparedPosts }),
  [FETCH_USERS]: (state, { users }) => ({ ...state, users }),
  DEFAULT: (state) => state,
}

export const postsReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}
