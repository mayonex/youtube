import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos";
import SearchHeader from "./components/SearchHeader";
import VideoDetail from "./pages/VideoDetail";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found 404</div>,
    children: [
      { index: true, element: <Videos /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
