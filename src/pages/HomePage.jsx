import React, { useEffect } from "react";
import Banner1 from "../components/Banner1.jsx";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import TrendingProducts from "../components/TrendingProducts.jsx";
import Banner2 from "../components/Banner2.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProducts />
      <Banner2 />
    </>
  );
};

export default Home;
