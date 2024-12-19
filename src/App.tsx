import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductList from "./section/Product/ProductList";
import CreateProduct from "./section/Product/CreateProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from "./section/Product/EditProduct";
const router = createBrowserRouter([
  {
    path: "/login",
    // element:
  },
  {
    path: "/signup",
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "list-product",
        element: <ProductList />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path:"edit-product/:id",

        element:<EditProduct/>
      }
    ],
  },
]);
const App = () => {
  return (
    <>
      <ToastContainer/>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
