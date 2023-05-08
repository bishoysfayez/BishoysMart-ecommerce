import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./Navbar.module.css";
import genStyles from "../../shared/genStyles.module.css";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions.jsx";
import { changeSearchTerm } from "../../store/searchKeywordSlice.js";
import CartIcon from "../Cart/CartIcon/CartIcon";
import { Link } from "react-router-dom";
import WishListIcon from "../WishList/WishListIcon/WishListIcon";

export default function Navbar() {
  let searchInput = useRef('');

  const dispatch = useDispatch();
  




  return (
    <>
      <div className={`${styles.navbarContainer} container-fluid`}>
        <div className={`${styles.logo} container-fluid`}>
          <Link className="navbar-brand" to="/">
            <div className={` ${styles.logoContainer} d-flex flex-column`}>
              <div className={` ${styles.logoMainBrand}`}>Bishoy's</div>
              <div className={` ${styles.logoSubTitle}`}>Mart</div>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.searchContainer} d-flex flex-row justify-content-end align-items-end`}
        >
          <form className="form-inline" action={`/search`} method="get">
            <div className={`${styles.searchInput}  d-flex flex-column`}>
              <div className={`input-group flex-row`}>
              <input
                    autocomplete="off"
                    type="text"
                    onChange={()=>{
                      dispatch(changeSearchTerm(searchInput.current.value));
                      //console.log(searchInput.current.value)
                    }
                      }
                  
                    
                    onfocusout={()=>{
                      dispatch(changeSearchTerm(""));
                    }}
                    ref={searchInput}
                    name="searchInput"
                    className="form-control"
                    placeholder="Search Products ..."
                    aria-label="search"
                    aria-describedby="basic-addon1"
                  />
                <button className="input-group-prepend p-0 btn ">
                  <span className="input-group-text" id="basic-addon1">
                    <i
                      className={`${styles.searchIcon} fa-solid fa-magnifying-glass m-1 h-100`}
                    ></i>
                  </span>
                </button>
                 <SearchSuggestions />
              </div>
            </div>
          </form>
        </div>
        <div>
          <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`${styles.navbarLinks} collapse navbar-collapse`}
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <div className="flex-col">
                        <div className={`container`}>
                          <i class="fa-solid fa-house style.textBlack"></i>
                        </div>
                        <div className={`container ${styles.textSmall}`}>
                          Home
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={'/cart'}>
                      <div className="d-flex flex-column align-items-start justify-content-start">
                        <div className={`container`}>
                          <i class="fa-solid fa-gift"></i>
                        </div>
                        <div className={`container ${styles.textSmall}`}>
                          Hot Deals
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to={`/contact`}>
                      <div className="d-flex flex-column align-items-start justify-content-start">
                        <div className={`container`}>
                          <i
                            class={`${genStyles.textBlack} fa-solid fa-phone`}
                          ></i>
                        </div>
                        <div className={`container ${styles.textSmall}`}>
                          Contact Us
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <div className="d-flex flex-column align-items-stretch justify-content-stretch">
                        <div className={`container`}>
                          <i class="fa-solid fa-user"></i>
                        </div>
                        <div className={`container ${styles.textSmall}`}>
                          Login / Register
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to= {"/cart"} className="nav-link ">
                      <div className="d-flex flex-column align-items-stretch justify-content-stretch">
                        <div className={`container`}>
                          <CartIcon />
                        </div>
                        <div className={`container ${styles.textSmall}`}>
                          Cart
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/wishList'}>
                      <div className="d-flex flex-column align-items-center justify-content-between">

                        <WishListIcon />
                        
                        <div className={`container ${styles.textSmall}`}>
                          Wish List
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
