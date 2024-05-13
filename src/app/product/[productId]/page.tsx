import Image from "next/image";
import React from "react";

const productDetailPage = () => {
  return (
    <section className="py-6 px-5 lg:py-10 lg:px-8 max-w-screen-lg mx-auto flex flex-col lg:flex-row items-stretch">
      {null === null ? (
        <p>상품 정보가 없습니다.</p>
      ) : (
        <>
          <div className="w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
            <Image
              src={""}
              alt="product thumbnail"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col py-8">
            <div className="font-bold text-lg mb-2">
              상품브랜드 이름
              <hr />
            </div>
            <div className="text-xl mb-2">상품이름</div>
            <div className="text-base mb-8">
              <div className="flex items-center mb-2">
                <span className="text-gray-700 mr-2">정가</span>
                <span className="text-lg text-gray-700 line-through">
                  원래가격
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 mr-2">판매가</span>
                <span className="text-xl text-red-500">가격</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 mr-2">배송</span>
                <span className="text-base text-gray-700">배송관련</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 mr-2">재고 번호</span>
                <span className="text-base text-gray-700">재고정보</span>
              </div>
            </div>
            <button className="bg-black text-white py-4 px-6 w-full text-center cursor-pointer">
              장바구니에 담기
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default productDetailPage;
