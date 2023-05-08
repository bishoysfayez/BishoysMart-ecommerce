import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./ProdPage.module.css";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../Cart/AddToCartBtn/AddToCartBtn.jsx";
import AddToWishListBtn from "../WishList/AddToWishListBtn/AddToWishListBtn.jsx";
export default function ProdPage() {
  //
  let [product, setProduct] = useState({});
  let stars = [1, 2, 3, 4, 5];
  let { productId } = useParams();
  let getProductById = async function (productId) {
    return await axios.get(`https://fakestoreapi.com/products/${productId}`);
  };


  
// check if item is wishlisted or not 
let globalState = useSelector((state) => {
  return state;
});



let itemIsWishListed = false


 let wishListItems =[]
  wishListItems = JSON.parse(localStorage.getItem('wishListItems')).length > 0 ? JSON.parse(localStorage.getItem('wishListItems')) : []

  



  // fetching products API

  //get product API 
  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        let result = res.data;
        setProduct(result);

// check if item is in wishList 
        wishListItems.forEach((item) => {
          if (productId === item.id) {
            itemIsWishListed = true;
      
            
          }
        });

      })
      .catch((error) => console.log(error));
  }, );











  return (
    <>
      <div className="container-fluid  p-5"></div>

      <div className="container w-75 m-auto d-flex flex-column justify-content-between align-items-between">
        <div
          className={`cardContainer d-flex flex-column justify-content-between align-items-between ${styles.card}`}
        >
          <div
            className={`img-container container-fluid d-flex flex-column justify-content-center align-items-center ${styles.cardImageContainer}`}
          >
            <img
              src={product.image}
              className="img-fluid my-auto"
              alt=""
              srcset=""
            />
          </div>
          <div
            className={`${styles.cardTextContainer} d-flex flex-column align-items-between justify-content-between text-center`}
          >
            <h3>{product.title}</h3>
            <h5>{product.price} $</h5>
            <h5>{product.description} </h5>

            <div className={`${styles.starsAndHeartContainer} container mx-auto py-2`}>
              <div
                className={`${styles.stars} d-flex flex-row text-center align-items-center justify-content-center`}
              >
                {product.rating &&
                  stars.map((star) => {
                    if (star < product.rating.rate) {
                      return (
                        <>
                          <i class="fa-solid fa-star text-warning"></i>
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
                  <AddToWishListBtn product={product} itemIsWishListed ={itemIsWishListed || product.isWishListed} />

                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 m-0">
                {product && <AddToCartBtn product={product} />}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
