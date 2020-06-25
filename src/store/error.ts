import { Action} from 'redux';

const SET_ERROR = 'SET_ERROR';

export const setError = (value: boolean) => ({
  type: SET_ERROR,
  value,
});

type SetErrorAction = Action<typeof SET_ERROR> & {
  value: boolean;
};

export const errorReducer = (error = false, action: SetErrorAction) => {
  switch (action.type) {
    case SET_ERROR:
      return action.value;
    default:
      return error;
  }
};
