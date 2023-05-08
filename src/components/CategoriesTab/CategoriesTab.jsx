import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoriesTab.module.css";
export default function CategoriesTab() {
  return (
    <>
      <div className={`${styles.categoryTab}`} style={{ width: "5rem" }}>
        <ul className="nav nav-pills nav-flush mb-auto text-center">
          <li>
            <a
              href={`/men's%20clothing`}
              className={`nav-link py-3 border-bottom`}
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i class="fa-solid fa-person"></i>
              <p className={`${styles.textSmall} text-center `}>Men</p>
            </a>
          </li>

          <li>
            <a
              href ={`/women's clothing`}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i class="fa-solid fa-person-dress"></i>
              <p className={`${styles.textSmall} text-center`}>Ladies</p>
            </a>
          </li>

          <li>
            <a
              href={`/jewelery`}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i class="fa-solid fa-gem"></i>
              <p className={`${styles.textSmall}`}>Jewelery</p>
            </a>
          </li>
          <li>
            <a
              href={`/electronics`}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i class="fa-solid fa-plug"></i>
              <p className={`${styles.textSmall} text-center`}>Electronics</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
