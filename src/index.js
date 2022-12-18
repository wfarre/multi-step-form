import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Info from "./pages/Info";
import Plan from "./pages/Plan";
import Addon from "./pages/Addon";
import Summary from "./pages/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "form/info",
        element: <Info />,
      },
      {
        path: "form/plan",
        element: <Plan />,
      },
      {
        path: "form/addon",
        element: <Addon />,
      },
      {
        path: "form/summary",
        element: <Summary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
