import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import styles from "./WishListIcon.module.css";

export default function WishListIcon() {
 

// check if change in wishlist items 

let globalState = useSelector((state) => {
  return state;
});

let wishListItemsFromReduxStore = globalState.wishListItems.wishListItems ;

let [wishListItems, setWishListItems] = useState(wishListItemsFromReduxStore);

// add listener to changes in wishlist items
useEffect(()=>{
  setWishListItems(wishListItemsFromReduxStore)
}, [wishListItemsFromReduxStore])


  
  return (
    <>
    
      <div className="contianer">
        
      <div
        className={` ${styles.cartIconContainer}`}
      >
        <span>
        <i className="fa-solid fa-heart"></i>
        </span>
        { wishListItems.length > 0 && 
        <p className={`${styles.cartQtyContainer}`}>{wishListItems.length}</p>
      }
      </div>
      </div>


    </>

  );
}
