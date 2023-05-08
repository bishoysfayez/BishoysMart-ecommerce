import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdCard from "../ProdCard/ProdCard";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get("searchInput");
  console.log(searchKeyword);

  let getProducts = async function () {
    return await axios.get(`https://fakestoreapi.com/products`);
  };

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
  }, []);

  return (
    <>
    <div className="container w-75 p-5"></div>
      <div className={`container`}>
        <div className="row g-2 my-4">
          <>
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <>
                    <ProdCard product={product} />
                  </>
                );
              })}
            
            {products.length <= 0 && (
              <>
                
                <h5>
                  Can't Find Results for your search - please try to check
                  spelling or use other kewyords
                </h5>
              </>
            )}
           
          </>
        </div>
      </div>
    </>
  );
}
