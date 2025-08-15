import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Form = lazy(() => import("@/components/Form"));

import Error from "@/pages/Error";
import MainLayouts from "../Layouts/MainLayouts";
import SuspenseLottieFallback from "@/components/LottieHandler/SuspenseLottieFallback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseLottieFallback>
        <MainLayouts />
      </SuspenseLottieFallback>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "",
        element: (
          <SuspenseLottieFallback>
            <Dashboard />
          </SuspenseLottieFallback>
        ),
      },
      {
        path: "login",
        element: (
          <SuspenseLottieFallback>
            <Login />
          </SuspenseLottieFallback>
        ),
      },
      {
        path: "register",
        element: (
          <SuspenseLottieFallback>
            <Register />
          </SuspenseLottieFallback>
        ),
      },
      {
        path: "form", // ✅ المسار الجديد
        element: (
          <SuspenseLottieFallback>
            <Form />
          </SuspenseLottieFallback>
        ),
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
