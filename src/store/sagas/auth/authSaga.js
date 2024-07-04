import { put, call } from "redux-saga/effects";
import { catchHandler } from "../helperSaga";

import {
  registerStart,
  registerSuccess,
  registerFail,
  userLoginStart,
  userloginSuccess,
  userLoginFail,
} from "../../reducers/authReducer";
import toast, { Toaster } from "react-hot-toast";
import axiosMain from "../../../http/axios/axios_main";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

//===============================UserLoginSaga============================//
export function* userLoginSaga(action) {
  yield put(userLoginStart());
  const { payload, toast, navigate, setDisable } = action.payload;
  try {
    const response = yield axiosMain.post(`/login`, payload);
    if (response?.data.status) {
      yield call(setItemToLocalStorage, "isUserAuthenticated", true);
      yield call(
        setItemToLocalStorage,
        "usertoken",
        JSON.stringify(response?.data?.data?.token)
      );

      yield call(
        setItemToLocalStorage,
        "userData",
        JSON.stringify(response?.data?.data)
      );

      yield put(userloginSuccess(response.data.data));

      sessionStorage.setItem("jwt", "enable");
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/Dashboard");
      }, 3000);
    } else {
      setDisable(false);
      toast.error(response.data.message);
      yield put(userLoginFail(response.data.message));
    }
  } catch (error) {
    setDisable(false);
    toast.error(error.response.data.message);
    yield call(catchHandler, error, userLoginFail);
  }
}
//===============================End Of UserLoginSaga============================//

//===============================UserRegisterSaga============================//
export function* registerSaga(action) {
  yield put(registerStart());
  const { payload, navigate, toast, setDisable } = action.payload;
  try {
    const response = yield axiosMain.post(`/signup`, payload);
    if (response?.data?.status) {
      toast.success(response.data.message);

      yield put(registerSuccess(response.data.data));
      setDisable(false);
      navigate("/Otp_verification", {
        state: { email: response.data.data?.email },
      });
    } else {
      setDisable(false);
      yield put(registerFail("Something went wrong! Please try again."));
    }
  } catch (error) {
    setDisable(false);
    toast.error(error.response.data.message);
    yield call(catchHandler, error, registerFail);
  }
}
//===============================End Of UserRegisterSaga============================//
