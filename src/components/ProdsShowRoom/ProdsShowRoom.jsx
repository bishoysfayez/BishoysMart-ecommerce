import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProdCard from "../ProdCard/ProdCard";
import { useSelector } from "react-redux";


export default function ProdsShowRoom() {
  const [products, setProducts] = useState([]);


  let getProducts = async function () {
    return await axios.get(`https://fakestoreapi.com/products`);
  };
  

  let globalState  = useSelector((state) => {
    return state;
  });

 let {searchKeyword} = globalState.searchKeyword;
 //console.log(searchKeyword)




  //listen to change in products results
  useEffect(() => {
    getProducts()
      .then((res) => {
        let results = res.data;

        setProducts(results);
        //console.log(results)
         
      })
      .catch((error) => console.log(error));
  }, [searchKeyword]);


  return (
    <>


        <div className={`container w-75`}>
      <div className="row g-2 my-4">
        <>
          {products.map((product) => {
            return (
              <>
                <ProdCard product ={product}/>
              </>
            );
          })}
        </>
      </div>
    </div>

    </>

  );
        

}