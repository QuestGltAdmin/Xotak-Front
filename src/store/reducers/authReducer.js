import { createSlice } from "@reduxjs/toolkit";

const isUserAuthenticated = localStorage.getItem("isUserAuthenticated");
const userData = localStorage.getItem("userData");
const usertoken = localStorage.getItem("usertoken");

const Wallet = localStorage.getItem("Wallet");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isUserAuthenticated: !!isUserAuthenticated ? true : false,
    user: !!userData && userData !== "undefind" ? JSON.parse(userData) : {},
    usertoken: !!usertoken ? JSON.parse(usertoken) : {},
    Wallet: !!Wallet && Wallet !== "undefined"?  JSON.parse(Wallet) : {},

  },

  reducers: {
    loginSaga: (state, action) => {
      return { ...state };
    },

    userLoginSaga: (state, action) => {
      return { ...state };
    },

    userLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    setUserprofileData: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    },

    userloginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        user: action.payload,
        authToken: action.payload.token,
      };
    },

    // userWalletLogin: (state, action) => {
    //   localStorage.setItem("userData", JSON.stringify(action.payload));
    //   return {
    //     ...state,
    //     isUserAuthenticated: true,
    //     user: action.payload,
    //   };
    // },
    isLogin: (state, action) => {
      localStorage.setItem("isUserAuthenticated", JSON.stringify(action.payload));
      return {
        ...state,
        isUserAuthenticated: true,
        user: action.payload,
      };
    },
    userLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },

    adminLoginSaga: (state, action) => {
      return { ...state };
    },

    adminLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    adminloginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        user: action.payload,
        authToken: action.payload.token,
      };
    },

    adminLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },

    
    setWallet: (state, action) => {
      localStorage.setItem("Wallet", JSON.stringify(action.payload));
      return {
        ...state,
        Wallet: action.payload,
      };
    },

    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        isAuthenticated: false,
        user: {},
        errorMsg: "",
      };
    },

    registerSaga: (state, action) => {
      return { ...state };
    },

    registerStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    registerSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        signupData: action.payload,
        errorMsg: "",
      };
    },

    registerFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        signupData: {},
        errorMsg: action.payload,
      };
    },
  },
});

export const {
  logout,
  registerSaga,
  registerSuccess,
  registerStart,
  registerFail,
  setUserprofileData,
  setWallet,
  userLoginSaga,
  userLoginStart,
  userloginSuccess,
  userLoginFail,
  adminLoginSaga,
  adminLoginStart,
  adminloginSuccess,
  adminLoginFail,
  // userWalletLogin,
  isLogin,
} = authSlice.actions;

export default authSlice.reducer;
