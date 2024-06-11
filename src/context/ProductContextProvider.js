import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/const";
import { type } from "@testing-library/user-event/dist/type";
//? 1) создать INIT_STATE в котором будет ледать нвчвльное состояние
//? 2)  создать функцию reducer в ктором прописывается switch конструкция на проверку action.type
//? 3) вызывть хук useReducer(reducer, INIT_STATE) возвращает [state, dispatch]
// action - является объектом, имеет 2 ключа
// dispatch - меняет action
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! create
  const addProduct = async (product) => {
    await axios.post(API, product);
  };
  //! get
  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
