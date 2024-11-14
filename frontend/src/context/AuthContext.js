import { createContext, useEffect, useReducer } from 'react';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "LOGOUT":
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(storedUser) });
      } catch (error) {
        console.error("Error parsing stored user:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (state.user) {
      try {
        localStorage.setItem('user', JSON.stringify(state.user));
      } catch (error) {
        console.error("Error storing user:", error);
      }
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};