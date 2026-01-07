import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../src/components/Root/Root.jsx'
import Home from "./components/Home/Home.jsx";
import '../src/index.css'
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import InsideHome from "./components/InsideHome/InsideHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home>
          <InsideHome></InsideHome>
        </Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
