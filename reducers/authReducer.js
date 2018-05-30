const defaultState = {
  user: {},
  loading: false,
  errors: {},
  isAuthenticated: false,
  token: null,
  userId: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        loading: false,
        errors: {},
        token: action.payload.data.token,
        isAuthenticated: true,
        userId: action.payload.data.user.id
      };
    }

    case 'LOGIN_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      };
    }

    case 'LOGIN_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    case 'NEW_CREDENTIALS': {
      return {
        ...state,
        user: {},
        errors: {}
      };
    }

    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        loading: false,
        errors: {},
        token: action.payload.data.token,
        isAuthenticated: true
      };
    }

    case 'REGISTER_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      };
    }

    case 'REGISTER_REJECTED': {
      const data = action.payload.response.data;
      return {
        ...state,
        loading: false,
        errors: { global: data.message }
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userId: null,
        user: {}
      };
    }

    case 'IS_AUTHENTICATED': {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token
      };
    }

    default:
      return state;
  }
};
