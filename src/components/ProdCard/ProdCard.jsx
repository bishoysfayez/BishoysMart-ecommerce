import React from "react";
import styles from "./ProdCard.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddToCartBtn from "../Cart/AddToCartBtn/AddToCartBtn.jsx";
import AddToWishListBtn from "../WishList/AddToWishListBtn/AddToWishListBtn.jsx";

export default function ProdCard(props) {
  // rating stars array
  let stars = [1, 2, 3, 4, 5];



// check if item is wishlisted or not 
let globalState = useSelector((state) => {
  return state;
});

let wishListItems =[]
 wishListItems = globalState.wishListItems.wishListItems ;
let itemIsWishListed = false;


  wishListItems.forEach((item) => {
    if (props.product.id === item.id) {
      itemIsWishListed = true;
    }

  });




  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 g-3 d-flex flex-column justify-content-between align-items-between p-2">
        <div
          className={`cardContainer d-flex flex-column justify-content-between align-items-between ${styles.card}`}
        >
          <div
            className={`img-container container-fluid d-flex flex-column justify-content-center align-items-center ${styles.cardImageContainer}`}
          >
            <img
              src={props.product.image}
              className="img-fluid my-auto"
              alt=""
              srcset=""
            />
          </div>

          <Link
            to={`/getProductById/${props.product.id}`}
            className={`${styles.cardTextContainer} d-flex flex-column align-items-between justify-content-between text-center`}
          >
            <p>{props.product.title.slice(0, 30)}...</p>
            <h5>{props.product.price} $</h5>
            </Link>

            <div className={`${styles.starsAndHeartContainer} d-flex flex-row align-items-between`}>
  

              <div
                className={`${styles.stars} `}
              >
                {stars.map((star) => {
                  if (star < props.product.rating.rate) {
                    return (
                      <>
                        <i class={`fa-solid fa-star ${styles.ratingStar}`}></i>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <i class="fa-solid fa-star text-dark"></i>
                      </>
                    );
                  }
                })}
              </div>
              <div className={`${styles.badgeContainer}`}>
                <div className="container-fluid">
                  <AddToWishListBtn product={props.product} itemIsWishListed = {itemIsWishListed}  />
                </div>
              </div>
              
            </div>
          <div className="row  justify-content-center align-items-center">
            <div className={`${styles.addToCartContainer} container-fluid col-12 m-0`}>
              <AddToCartBtn product={props.product} />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
