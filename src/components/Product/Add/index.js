import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


const ProductAdd = () => {

  const history = useHistory();

  const product = useSelector(
    (state) => state.productReducer
  );

  
  return (
    <div>
			productAdd
    </div>
  )
}

export default ProductAdd
