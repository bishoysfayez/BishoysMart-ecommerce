import React from "react";
import { useSelector } from "react-redux";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
  let globalState = useSelector((state) => {
    return state;
  });

  let cartItemsFromStore = JSON.parse(localStorage.getItem("cartItems")) && JSON.parse(localStorage.getItem("cartItems")).length > 0
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  return (
    <>
    
      <div className="contianer">
        
      <div
        className={` ${styles.cartIconContainer}`}
      >
        <span>
        <i className="fa-solid fa-shopping-cart"></i>
        </span>
        { cartItemsFromStore.length > 0 && 
        <p className={`${styles.cartQtyContainer}`}>{cartItemsFromStore.length}</p>
      }
      </div>
      </div>


    </>

  );
}
