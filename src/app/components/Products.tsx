"use client";
import React from "react";
import { getProducts } from "../api/products";

interface Props {
  brandId?: number;
}
async function Products({ brandId }: Props) {
  const products = await getProducts();
  console.log("프로덕트들", products);

  return (
    <main>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12"> */}
      <div className="border border-black w-[150px] h-[200px]">
        {products?.results?.map((product: any) => (
          <div key={product.id}>
            왜<p className="border ">브랜드 번호 </p>
            <p>왜 안나오는거지?</p>
          </div>
        ))}
      </div>
      왜 화면에 안나와?
      {products[0]?.id === undefined ? "언디파인" : "값 들어옴"}
    </main>
  );
}

export default Products;
