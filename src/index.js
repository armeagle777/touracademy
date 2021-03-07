import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { configureStore } from "store"

import App from "./App"

import "izitoast/dist/css/iziToast.css"
import "assets/styles/index.scss"

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
