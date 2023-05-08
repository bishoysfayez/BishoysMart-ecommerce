import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import stylesFixedNavbar from "./FixedNavbar.module.css";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions.jsx";
import CartIcon from "../Cart/CartIcon/CartIcon";
import { changeSearchTerm } from "../../store/searchKeywordSlice.js";
import { Link } from "react-router-dom";
import WishListIcon from "../WishList/WishListIcon/WishListIcon";

export default function FixedNavbar() {
  let searchInput = useRef(null);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`container-fluid ${stylesFixedNavbar.fixedNavbar} d-flex flex-row justify-content-end align-items-end`}
      >
        <div className={`${stylesFixedNavbar.navbarContainer} container-fluid`}>
          <div className={`${stylesFixedNavbar.logo} container-fluid`}>
            <Link to={"/"} className="navbar-brand">
              <div
                className={` ${stylesFixedNavbar.logoContainer} d-flex flex-column`}
              >
                <div className={` ${stylesFixedNavbar.logoMainBrand}`}>
                  Bishoy's
                </div>
                <div className={` ${stylesFixedNavbar.logoSubTitle}`}>Mart</div>
              </div>
            </Link>
          </div>

          <div
            className={`${stylesFixedNavbar.searchContainer} d-flex flex-row justify-content-center align-items-center`}
          >
            <form className="" action={`/search`} method="get">
              <div
                className={`${stylesFixedNavbar.searchInput} d-flex flex-column`}
              >
                <div className={`input-group flex-row`}>
                  <input
                    autocomplete="off"
                    type="text"
                    onChange={() => {
                      dispatch(changeSearchTerm(searchInput.current.value));
                    }}
                    onfocusout={() => {
                      dispatch(changeSearchTerm(""));
                    }}
                    ref={searchInput}
                    name="searchInput"
                    className="form-control"
                    placeholder="Search Products ..."
                    aria-label="search"
                    aria-describedby="basic-addon1"
                  />
                  <div className={`${stylesFixedNavbar.searchIconContainer}`}>
                    <button className="input-group-prepend p-0 btn ms-1 ">
                      <span className="input-group-text" id="basic-addon1">
                        <i
                          className={`${stylesFixedNavbar.searchIcon} fa-solid fa-magnifying-glass m-1 h-100`}
                        ></i>
                      </span>
                    </button>
                  </div>
                  <SearchSuggestions />
                </div>
              </div>
            </form>
          </div>

          <nav
            className={`navbar navbar-expand-lg ${stylesFixedNavbar.navbarLinks}`}
          >
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
                <span className="navbar-toggler-icon text-white bg-white border-0"></span>
              </button>
              <div className={`collapse navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      <div className="flex-col">
                        <div className={`container`}>
                          <i class="fa-solid fa-house"></i>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/electronics"} className="nav-link">
                      <div className="flex-col">
                        <div className={`container`}>
                          <i class="fa-solid fa-gift"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contact"}>
                      <div className="flex-col">
                        <div className={`container`}>
                          <i class="fa-solid fa-phone"></i>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      <div className="flex-col">
                        <div className={`container`}>
                          <i class="fa-solid fa-user"></i>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/cart"} className="nav-link">
                      <div className="flex-col">
                        <CartIcon />
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/wishList"} className="nav-link">
                      <div className="flex-col">
                        <WishListIcon />
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
