import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Dispatch } from 'react';

import { loadingReducer, finishLoading, startLoading } from './loading';
import { postsReducer, setPosts } from './posts';
import { fetchPreparedPosts, fetchUsers } from '../helpers/api';
import { setUsers, usersReducer } from './users';
import { errorReducer, setError } from './error';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  hasError: errorReducer,
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export const loadPosts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setError(false));
    dispatch(startLoading());

    try {
      const posts = await fetchPreparedPosts();

      dispatch(setPosts(posts));
    } catch (error) {
      dispatch(setError(true));
    }

    dispatch(finishLoading());
  };
};

export const loadUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setError(false));
    dispatch(startLoading());

    try {
      const users = await fetchUsers();

      dispatch(setUsers(users));
    } catch (error) {
      dispatch(setError(true));
    }

    dispatch(finishLoading());
  };
};

export const getPosts = (state: RootState) => state.posts;
export const getLoading = (state: RootState) => state.isLoading;
export const getError = (state: RootState) => state.hasError;
export const getUsers = (state: RootState) => state.users;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
