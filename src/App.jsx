import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

////////////////////////////////// Components
import ScrollToTop from "./helper/ScrollToTop";
import Products from "./components/product/Products";
import NotFound from "./components/not-found/NotFound";
import ProductDetail from "./components/product-detail/ProductDetail";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import Layout from "./components/layout/Layout";

////////////////////////////////// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    ////////////////// Contexts
    <Provider store={store}>
      <ScrollToTop />
      {/* ----------------- Layout ----------------- */}
      <Layout>
        {/* ----------------- Routes ----------------- */}
        <Routes>
          <Route path="/store" element={<Products />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/store/product-detail/:id" element={<ProductDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
