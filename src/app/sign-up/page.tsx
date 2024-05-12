"use client";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };

  return (
    <section className="flex flex-col items-center py-12 w-full min-h-screen">
      <h2 className="mb-6 font-extrabold text-2xl text-gray-800">회원가입</h2>
      <form
        className="p-8 bg-white flex flex-col items-center gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-sm">
            이메일
          </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 mt-1 border text-sm border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-2 text-sm">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2.5 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm">
            비밀번호 확인
          </label>
          <input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2.5 mt-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full px-4 py-3 mt-5 bg-black text-white font-bold hover:bg-gray-800 transition"
          >
            회원가입하기
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignUpPage;
