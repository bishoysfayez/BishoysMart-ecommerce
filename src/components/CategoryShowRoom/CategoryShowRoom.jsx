import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdCard from "../ProdCard/ProdCard";
import { useParams } from "react-router-dom";
export default function CategoryShowRoom(props) {
  const [products, setProducts] = useState([]);
  let { category } = useParams();
  let getProducts = async function () {
    return await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
  };

  // fetching products API

  //listen to change in products results
  useEffect(() => {
    getProducts(category)
      .then((res) => {
        let results = res.data;

        setProducts(results);
        // console.log(results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container w-75 p-5"></div>
        <div className="container">
          <h2 className="display-2 text-capitalize">
          {category}
          </h2>
        </div>
      <div className={`container`}>
        <div className="row g-2 my-4">
          <>
            {products.map((product) => {
              return (
                <>
                  <ProdCard product={product} />
                </>
              );
            })}
          </>
        </div>
      </div>
    </>
  );
}
