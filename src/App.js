import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BillPage from "./pages/BillPage";
import CartPage from "./pages/CartPage";
import CustomerPage from "./pages/CustomerPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import StatisticPage from "./pages/StatisticPage";
import TablePage from "./pages/TablePage";

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteControl>
            <TablePage/>
          </RouteControl>
        }
      />
      <Route
        path="/cart"
        element={
          <RouteControl>
            <CartPage />
          </RouteControl>
        }
      />
      <Route
        path="/bills"
        element={
          <RouteControl>
            <BillPage />
          </RouteControl>
        }
      />
      <Route
        path="/customers"
        element={
          <RouteControl>
            <CustomerPage />
          </RouteControl>
        }
      />
      <Route
        path="/statistic"
        element={
          <RouteControl>
            <StatisticPage />
          </RouteControl>
        }
      />
      <Route
        path="/products"
        element={
          <RouteControl>
            <ProductPage />
          </RouteControl>
        }
      />
      <Route
        path="/tables"
        element={
          <RouteControl>
            <TablePage />
          </RouteControl>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

export const RouteControl = ({ children }) => {
    return children;
};
