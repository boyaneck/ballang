"use client";
import React, { useState } from "react";
import LoginModal from "./LoginModal";

const HeaderLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="flex items-center bg-white h-16 border-b px-5 lg:px-8 z-5">
      <a className="font-bold text-2xl" href="/">
        발랑
      </a>
      <ul className="text-[15px] font-medium ml-20">
        <li>
          <a>BRANDS</a>
        </li>
      </ul>
      <div className="ml-auto flex items-center gap-x-2">
        <a
          href="sign-up
      "
          className="text-[15px] font-medium text-grey-800 hover:cursor-pointer hover:text-black transition hover:font-bold"
        >
          회원가입
        </a>{" "}
        {/* <button className="text-[15px] font-medium text-gray-800 hover:text-black transition">
          로그인
        </button> */}
        <button
          className="text-[15px] font-medium text-grey-800 hover:cursor-pointer hover:text-black transition hover:font-bold"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          로그인
        </button>
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </header>
  );
};

export default HeaderLayout;
