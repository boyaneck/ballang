"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";

interface Props {
  brandId?: number;
}

async function Products({ brandId }: Props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await getProducts();
      console.log("프로덕트들", products);
    }
    getProducts();
  }, []);

  return (
    <main>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12"> */}
      <div className="border border-black w-[150px] h-[200px]">
        {/* {products?.results?.map((product: any) => (
          <div key={product.id}>
            <p className="border ">브랜드 번호 </p>
          </div>
        ))} */}
      </div>
    </main>
  );
}

export default Products;
