import React from "react";
import { Routes, Route, BrowserRouter, useRoutes} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Products/Product";
import ErrorPage from "../pages/Error404";
import ProductLayout from "../pages/Products/ProductLayout";

const AppRoutes = () => {
  const productRoutes = [
    {
      path: "/products",
      element: <ProductLayout />,
      child: [
        {
          path: "",
          element: <Products />,
        },
        {
          path: ":id",
          element: <Product />,
        },
      ],
    },
  ];

  // const productRouting = useRoutes(productRoutes);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} /> */}
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
