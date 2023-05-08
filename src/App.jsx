import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home.jsx";
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import CategoryShowRoom from "./components/CategoryShowRoom/CategoryShowRoom.jsx";
import ProdPage from "./components/ProdPage/ProdPage.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import CartPage from "./components/Cart/CartPage/CartPage";
import WishListPage from "./components/WishList/WishListPage/WishListPage";

function App() {
 
  // routing
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:category", element: <CategoryShowRoom /> },
        { path: `/getProductById/:productId`, element: <ProdPage /> },
        { path: `/search`, element: <SearchResults /> },
        { path: `/contact`, element: <Contact /> },
        { path: `/cart`, element: <CartPage /> },
        { path: `/wishList`, element: <WishListPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <React.StrictMode>
          <RouterProvider router={routers}>

          </RouterProvider>
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
