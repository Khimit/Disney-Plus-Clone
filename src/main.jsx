import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./components/Home.jsx";
import Watch from "./components/Watch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "home", element: <Home /> },
    ],
  },
  { path: "/products/:id", element: <Watch /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
