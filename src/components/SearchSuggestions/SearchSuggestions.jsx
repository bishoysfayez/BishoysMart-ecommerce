import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./searchSuggestions.module.css";
import { Link } from "react-router-dom";

export default function SearchSuggestions() {
  const [products, setProducts] = useState([]);

  let getProducts = async function () {
    return await axios.get(`https://fakestoreapi.com/products`);
  };

  let globalState  = useSelector((state) => {
    return state;
  });

 let {searchKeyword} = globalState.searchKeyword;
 //console.log(searchKeyword)

  // fetching products API

  //listen to change in products results
  useEffect(() => {
    getProducts()
      .then((res) => {
        let results = res.data;
        setProducts(
          results.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(searchKeyword.toLowerCase());
          })
        );
      })
      .catch((error) => console.log(error));
  }, [searchKeyword]);

  return (
    <>
      <div className={`container`}>
        <div
          className={`${styles.searchSuggestionsContainer} container d-flex flex-column`}
        >
          <>
            {searchKeyword && searchKeyword.length < 2 &&
              products.map((product) => {
                return <></>;
              })}
            {searchKeyword && searchKeyword.length >= 2 && products.length >0 &&
              products.map((product) => {
                return (
                  <>
                  <Link to={`/getProductById/${product.id}`}>
                    <div
                      className={`${styles.searchSuggestionEntry} d-flex flex-row`}
                    >
                      <div
                        className={`${styles.resultImageContainer} rounded-2`}
                      >
                        <img
                          src={product.image}
                          alt=""
                          srcset=""
                          className="img-fluid img-thumbnail"
                        />
                      </div>
                      <div className={`${styles.resultTextContainer}`}>
                        <h5
                          className={`${styles.productTitle} text-left p-3 m-auto`}
                        >
                          {product.title}
                        </h5>
                      </div>
                    </div>
                    </Link>
                  </>
                );
              })}
          </>
        </div>
      </div>
    </>
  );
}
