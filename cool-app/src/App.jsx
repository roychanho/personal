import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Products, { dataLoader as ProductsDataLoader } from "./pages/Products";
import Product, {
  dataLoader as ProductDataLoader,
} from "./pages/Products/Product";
import ProductLayout from "./pages/Products/ProductLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} errorElement={<Error404 />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} loader={ProductsDataLoader} />
          <Route path=":id" element={<Product />} loader={ProductDataLoader} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App grid min-h-screen bg-slate-500">
      {/* <Router /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
