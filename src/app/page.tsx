import axios from "axios";
import React from "react";
import { getProducts } from "./api/products";
import HeaderLayout from "./components/HeaderLayout";
import Products from "./components/Products";

const Home = () => {
  // const fetchData = async () => {
  //   try {
  //     const data = await getProducts(); // Promise 객체를 해결하여 데이터를 받아옴
  //     console.log("전 품목 상품데이터", data); // 여기서 데이터를 처리하거나 원하는 대로 사용합니다.
  //   } catch (error) {
  //     console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
  //   }
  // };

  // const fetchedData = fetchData();
  return (
    <div>
      <HeaderLayout />
      <div>Trending</div>
      aa
      <Products />
    </div>
  );
};

export default Home;
