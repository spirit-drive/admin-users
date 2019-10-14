export const SET_USERS = 'SET_USERS';

export const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS:
      return payload;

    default:
      return state;
  }
}

// Action Creators
export const setUsers = users => ({ type: SET_USERS, payload: users });

// All Action Creators
export const actions = {
  setUsers,
};
