import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";


const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Form = lazy(() => import("@/Components/ui/Form"));

const Parent = lazy(() => import("@/pages/Parent"));


import Error from "@/pages/Error";
import MainLayouts from "../Layouts/MainLayouts";
import SuspensLottieFallback from "@/components/LottieHandler/SuspensLottieFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspensLottieFallback>
        <MainLayouts />
      </SuspensLottieFallback>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "",
        element: (
          <SuspensLottieFallback>
            <Dashboard />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "login",
        element: (
          <SuspensLottieFallback>
            <Login />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "register",
        element: (
          <SuspensLottieFallback>
            <Register />
          </SuspensLottieFallback>
        ),
      },
      {
        path: "form", // ✅ المسار الجديد
        element: (
          <SuspensLottieFallback>
            <Form />
          </SuspensLottieFallback>
        ),
      },

      {
  path: "parent",
  element: (
    <SuspensLottieFallback>
      <Parent />
    </SuspensLottieFallback>
  ),
}

    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
