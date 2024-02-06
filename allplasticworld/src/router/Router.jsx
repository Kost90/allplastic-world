import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../rootlayout/RootLayout";
import UpdateForm from "../components/form/UpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "update",
        element: <UpdateForm />,
      },
    ]
  },
  
]);

const Router = () => <RouterProvider router={router} />;

export { Router };
