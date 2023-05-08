import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteFromWishList } from "../../../store/wishListSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from './WishListPage.module.css'

export default function WishListPage() {
  // rating stars array
  let stars = [1, 2, 3, 4, 5];

// check if change in wishlist items 

let globalState = useSelector((state) => {
  return state;
});

let wishListItemsFromReduxStore = globalState.wishListItems.wishListItems ;



let [wishListItems, setWishListItems] = useState(wishListItemsFromReduxStore)

useEffect(()=>{
  setWishListItems(wishListItemsFromReduxStore)
  
},[wishListItemsFromReduxStore])

const dispatch = useDispatch()

  return (
    <>
      <div className="container p-5"></div>

      <h2 className={`display-3 p-2 text-center`}>Your Wish List</h2>
      <div className={`container p-5`}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">item </th>
              <th scope="col">Price $</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>
            {wishListItems.length &&
              wishListItems.map((product, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <Link to={`/getProductById/${product.id}`}>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4">
                                <div
                                  className={`img-container w-50 container-fluid d-flex flex-column justify-content-center align-items-center`}
                                >
                                  <img
                                    src={product.image}
                                    className="img-fluid my-auto"
                                    alt=""
                                    srcset=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <h5>{product.title.slice(0, 20)}...</h5>
                                <p className="text-muted">{product.title}</p>
                                <p>
                                  {" "}
                                  {stars.map((star) => {
                                    if (star < product.rating.rate) {
                                      return (
                                        <>
                                          <i
                                            class={`fa-solid fa-star text-warning`}
                                          ></i>
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
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="p-2">{product.price}</td>

                      <td className="p-2">
                        <div className={`${styles.deleteIcon} container m-auto`}>
                          <div className="container ">
                            <div
                              className="py-1 px-4"
                              onClick={() => {
                                dispatch(deleteFromWishList(product));
                              }}
                            >
                              <i className="fa-solid fa-trash text-danger"></i>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>

        {wishListItems.length === 0 && (
          <>
            <div className="container text-center w-75 display-3">
              No items in your Wish List yet
            </div>
          </>
        )}
      </div>
    </>
  );
}
