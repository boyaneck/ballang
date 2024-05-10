import axios from "axios";
import React from "react";

const Home = () => {
  console.log("ㅇㅇㅇ");
  const data = axios
    .get("https://api.ballang.yoojinyoung.com", { withCredentials: true })
    .then((response) => {
      // 데이터를 성공적으로 받아왔을 때 실행할 코드
      console.log("데이터가 정상적으로 오나요?", response.data);
    })
    .catch((error) => {
      // 오류가 발생했을 때 실행할 코드
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    });

  return (
    <div>
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
          <button className="text-[15px] font-medium text-gray-800 hover:text-black transition">
            로그인
          </button>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
