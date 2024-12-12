import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductList from "./section/Product/ProductList";
import CreateProduct from "./section/Product/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/login",
    // element:
  },
  {
    path: "/signup",
  },
  {
    path: "/dashboard",
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
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
