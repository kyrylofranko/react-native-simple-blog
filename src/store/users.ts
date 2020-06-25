import { Action } from 'redux';

const SET_USERS = 'SET_USERS';

export const setUsers = (users: []) => ({ type: SET_USERS, users });

type SetUsersAction = Action<typeof SET_USERS> & {
    users: Author[];
};

export const usersReducer = (users: Author[] = [], action: SetUsersAction) => {
    switch (action.type) {
        case SET_USERS:
            return action.users;
        default:
            return users;
    }
};
