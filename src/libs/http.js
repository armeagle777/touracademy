import axios from "axios"
import { mergeAll } from "ramda"
import { POST, PUT, GET, DELETE } from "./httpMethods"

const defaultHeaders = {}

const request = (method, url, headers, axiosConfig = {}) => {
  const options = mergeAll([
    {
      method,
      url,
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:4000",
      headers: { ...defaultHeaders, ...headers },
      responseType: "json",
    },
    axiosConfig,
  ])

  return axios(options)
}

export default {
  [POST]: (url, { headers = {}, data = {}, params = {}, transformResponse = [] }) =>
    request(POST, url, headers, {
      data,
      params,
      transformResponse,
    }),
  [PUT]: (url, { headers = {}, data = {}, params = {}, transformResponse = [] }) =>
    request(PUT, url, headers, {
      data,
      params,
      transformResponse,
    }),
  [GET]: (url, { headers = {}, params = {}, transformResponse = [] }) =>
    request(GET, url, headers, {
      params,
      transformResponse,
    }),
  [DELETE]: (url) => request(DELETE, url, {}),
}
