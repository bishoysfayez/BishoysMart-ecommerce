import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import CategoriesTab from "../CategoriesTab/CategoriesTab.jsx";
import Navbar from '../Navbar/Navbar.jsx'
import FixedNavbar from "../FixedNavbar/FixedNavbar.jsx";


export default function () {
   // navbar show and hide
   let [showNav, setShowNav] = useState(true);
   const controlNavbar = () => {
     if (window.scrollY > 100) {
       setShowNav(false);
     } else {
       setShowNav(true);
     }
   };
   useEffect(() => {
     window.addEventListener("scroll", controlNavbar);
     return () => {
       window.removeEventListener("scroll", controlNavbar);
     };
   }, []);
 
  return (
    <>
      {showNav && <Navbar />}
      {!showNav && <FixedNavbar />}
      <CategoriesTab />

      <Outlet />
    </>
  );
}
