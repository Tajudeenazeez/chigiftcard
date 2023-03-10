import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ProductLists from './component/ProductLists';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Layout/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/productLists",
    element: <ProductLists/>,
    errorElement:<ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
