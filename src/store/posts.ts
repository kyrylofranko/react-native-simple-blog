import { Action } from 'redux';

const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts: []) => ({ type: SET_POSTS, posts });

type SetPostsAction = Action<typeof SET_POSTS> & {
    posts: Post[];
};

export const postsReducer = (posts: Post[] = [], action: SetPostsAction) => {
    switch (action.type) {
        case SET_POSTS:
            return action.posts;
        default:
            return posts;
    }
};
