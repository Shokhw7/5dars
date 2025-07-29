import "./App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SingleProducts from "../pages/SingleProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

function App() {
  let user = true;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "singleProduct/:id",
          element: <SingleProducts />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
