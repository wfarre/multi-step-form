// @ts-ignore
import App from "./App.tsx";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import Info from "./pages/Info.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "form/info",
//         element: <Info />,
//       },
//       {
//         path: "form/plan",
//         element: <Plan />,
//       },
//       {
//         path: "form/addon",
//         element: <Addon />,
//       },
//       {
//         path: "form/summary",
//         element: <Summary />,
//       },
//       {
//         path: "form/thankyou",
//         element: <Thankyou />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <Info /> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
