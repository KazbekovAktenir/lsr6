import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const hahdleClick = () => {
    if (!name || !img) {
      alert("Заполните поля!");
      return;
    }
    let newProduct = {
      name,
      img,
    };
    addProduct(newProduct);
    navigate("/");
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="filled-basic"
        label="name"
        variant="filled"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="filled-basic"
        label="img"
        variant="filled"
      />
      <Button onClick={hahdleClick} variant="contained" color="success">
        ADD PRODUCT
      </Button>
    </div>
  );
};

export default AddProduct;
