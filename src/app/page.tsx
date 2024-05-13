import axios from "axios";
import React from "react";
import { getProducts } from "./api/products";
import HeaderLayout from "./components/HeaderLayout";
import Products from "./components/Products";

const Home = () => {
  return (
    <div>
      <HeaderLayout />
      <div>Trending</div>

      <Products />
    </div>
  );
};

export default Home;
