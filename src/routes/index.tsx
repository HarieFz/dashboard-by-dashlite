import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";
import ErrorBoundary from "../pages/error";

export default function SetupRoute() {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorBoundary />,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
