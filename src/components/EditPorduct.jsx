import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

const EditPorduct = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const [name, setName] = useState(oneProduct.name);
  const [img, setImg] = useState(oneProduct.img);
  console.log(oneProduct);
  useEffect(() => {
    setName(oneProduct.name);
    setImg(oneProduct.img);
  }, [oneProduct]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => getOneProduct(id), []);

  const handleClick = () => {
    if (!name || !img) {
      alert("error");
      return;
    }
    let editProduct = {
      name,
      img,
    };
    console.log(editProduct);
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="filled-basic"
        label="name"
        variant="filled"
        value={name}
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="filled-basic"
        label="img"
        variant="filled"
        value={img}
      />
      <Button onClick={handleClick} variant="contained">
        SAVE
      </Button>
    </div>
  );
};

export default EditPorduct;
