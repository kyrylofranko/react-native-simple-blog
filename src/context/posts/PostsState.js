import React, { useReducer } from 'react';
import { postsReducer } from "./postsReducer";
import { PostsContext } from "./postsContext";
import { Http } from "../../helpers/http";
import { FETCH_POSTS, FETCH_USERS, FINISH_LOADING, START_LOADING } from "../types";

const API_URL = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server';

export const PostsState = ({ children }) => {
  const initialState = {
    posts: [],
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const fetchUsers = async () => {
    startLoading();

    const users = await Http.get(`${API_URL}/users`);
    dispatch({ type: FETCH_USERS, users });
  }

  const fetchPosts = async () => {
    startLoading();

    const [posts, users, comments] = await Promise.all([
      Http.get(`${API_URL}/posts`),
      Http.get(`${API_URL}/users`),
      Http.get(`${API_URL}/comments`),
    ]);

    const preparedPosts = posts.map((post) => ({
      ...post,
      comments: comments
        .filter(comment => comment.post === post.id)
        .map(comment => ({
          ...comment,
          author: users.find(user => user.id === comment.author).username,
        })),
      author: users.find(user => user.id === post.author).username,
    }));

    dispatch({ type: FETCH_POSTS, preparedPosts });
    finishLoading();
  };

  const startLoading = () => dispatch({ type: START_LOADING });
  const finishLoading = () => dispatch({ type: FINISH_LOADING });

  return (
    <PostsContext.Provider value={{
      posts: state.posts,
      users: state.users,
      fetchPosts,
      fetchUsers,
    }}>
      {children}
    </PostsContext.Provider>
  );
}
