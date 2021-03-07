import { loggedIn, getToken, logout } from "services/authService"

const checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const unauthorizedHandler = ({ response }) => {
  if (response.status === 401) {
    logout()
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

// Common axios call for public apis
export const authApi = (method, url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  // Setting Authorization header if logged in
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (loggedIn()) {
    headers.Authorization = `Bearer ${getToken()}`
  }

  return http[method](url, {
    headers,
    ...options,
  })
    .then(checkStatus)
    .then((response) => response)
    .catch(unauthorizedHandler)
}

// Auth axios call for private apis
export const authApi = (method, url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  return http[method](url, {
    headers,
    ...options,
  })
    .then(checkStatus)
    .then((response) => response)
    .catch(unauthorizedHandler)
}
