import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleWishList } from "../../../store/wishListSlice.js";
import styles from "./AddToWishListBtn.module.css";

export default function AddToWishListBtn(props) {
  const dispatch = useDispatch();
  let  [itemIsWishListed, setItemIsWishListed] = useState(props.itemIsWishListed);

  useEffect(()=>{
    setItemIsWishListed(props.itemIsWishListed)
  }, [props.itemIsWishListed])


  return (
    <>
      <div className={`${styles.wishListBtnContainer}`}>
        {itemIsWishListed && (
          <button
            onClick={() => {
              dispatch(toggleWishList(props.product));
            }}
            className={`${styles.wishListBtnActive} btn`}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        )}
        {!itemIsWishListed && (
          <button
            onClick={() => {
              dispatch(toggleWishList(props.product));
            }}
            className={`${styles.wishListBtnNotActive} btn `}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        )}
      </div>
    </>
  );
}
