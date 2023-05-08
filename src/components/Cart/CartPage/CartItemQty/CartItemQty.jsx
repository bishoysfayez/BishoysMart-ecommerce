import React from "react";
import { useDispatch } from "react-redux";
import {increase, decrease} from '../../../../store/cartSlice.js'

export default function CartItemQty(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container d-flex flex-column align-items-between justify-content-between">
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="container-fluid">
            <button onClick={()=>{
              dispatch(increase(props.product))
            }}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="container-fluid text-center">
            <p className="text-center text-bold m-auto">
              <strong>{props.product.cartQty}</strong>
            </p>
          </div>
          <div className="container-fluid">
          <button onClick={()=>{
              dispatch(decrease(props.product))
            }}>
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
