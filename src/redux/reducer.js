const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const SET_POSTS = 'SET_POSTS'

const initialState = {
  isAuthenticated: false,
  user: {},
  posts: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, isAuthenticated: true , user: action.payload }
    case USER_LOGGED_OUT:
      return { ...state, isAuthenticated: false, user: {} }

    case SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state;
  }
}

export function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT
  }
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

