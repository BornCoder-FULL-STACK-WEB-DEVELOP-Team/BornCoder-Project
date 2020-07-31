import React, { useContext, useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: localStorage.getItem("user"),

    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //console.log(state.user);
  console.log(state);
  // const { userName } = props.user;

  //Load User ****
  const loadUser = async () => {
    // @todo - load token into global headers
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    try {
      if (state.user !== null) {
        const userId = state.user.userId;

        const res = await axios.get(`/user/${userId}`);

        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  //Register User***
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/user/adding", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  //Login User ****
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/user/login", formData, config);
      console.log(formData);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  //Logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  //Clear Errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        //token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
