import axios from "utils/axios"
import authService from "services/authService"

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SILENT_LOGIN,
  LOGOUT,
} from "constants/types"

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: '@account/update-profile' })

      const user = await authService.loginWithEmailAndPassword(email, password)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
        },
      })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })
      throw error
    }
  }
}

export function register(data) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST })

      const user = await authService.userRegister(data)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
        },
      })
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE })
      throw error
    }
  }
}

export function setUserData(user) {
  return (dispatch) =>
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user,
      },
    })
}

export function logout() {
  return async (dispatch) => {
    authService.logout()

    dispatch({
      type: LOGOUT,
    })
  }
}

