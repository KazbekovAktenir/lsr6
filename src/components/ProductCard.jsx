import { Button } from "@mui/material";
import React from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Link } from "react-router-dom";

const ProductCard = ({ name, img, id }) => {
  const { deleteProduct } = useProducts();
  return (
    <div>
      <img src={img} width={"200"} height={"200"} />
      <h3>{name}</h3>
      <Button
        onClick={() => deleteProduct(id)}
        variant="contained"
        color="error"
      >
        DELETE
      </Button>
      <Link to={`/edit/${id}`}>
        <Button>EDIT</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
