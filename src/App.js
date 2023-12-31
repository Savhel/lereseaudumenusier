import React from "react";
import {
  RouterProvider,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Commandes from "./pages/Commandes";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import AddCategorie from "./pages/AddCategorie";

//section

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([ 
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/product/:id", element: <ProductDetails /> },

      { path: "/products/:id", element: <Products /> },

      { path: "/search", element: <Search /> },

      { path: "/commande/:id", element: <Commandes /> },

      { path: "/adminStore", element: <Admin /> },

      { path: "/adminStores", element: <AddCategorie /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
