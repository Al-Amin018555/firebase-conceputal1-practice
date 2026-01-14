import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../src/components/Root/Root.jsx'
import Home from "./components/Home/Home.jsx";
import '../src/index.css'
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import About from "./components/About/About.jsx";
import PersonalData from "./components/PersonalData/PersonalData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home>

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
      {
        path: '/about',
        element: <ProtectedRoute>
          <About></About>
        </ProtectedRoute>,
      },
      {
        path: '/pdata',
        element: <ProtectedRoute>
          <PersonalData></PersonalData>
        </ProtectedRoute>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>

);
