import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";

export default function AddToCartBtn(props) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className={`btn w-100 m-0`}
        onClick={() => {
          //props.product && props.product.cartQty ? props.product.cartQty =+1 :props.product.cartQty =1;
          dispatch(addToCart(props.product));
          console.log(props.product)
        }}
      >
        <i class="fa-solid fa-plus"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </>
  );
}
