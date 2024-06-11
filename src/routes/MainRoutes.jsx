import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
import EditPorduct from "../components/EditPorduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditPorduct />} />
    </Routes>
  );
};

export default MainRoutes;
