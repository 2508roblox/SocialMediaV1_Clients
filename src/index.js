import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);
ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
