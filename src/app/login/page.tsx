"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NaverIcon, GoogleIcon, KakaoIcon } from "./social-icons";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ 실제 로그인 API 호출 (예시용으로 성공 처리)
    const mockLoginSuccess = username === "admin" && password === "1234";

    if (mockLoginSuccess) {
      // 세션 저장 (실제로는 서버 응답값 사용)
      localStorage.setItem("token", "mock-token"); // 실제는 토큰값 사용

      // 메인 페이지로 이동
      router.push("/");
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Rankademy</span>
        </Link>

        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Rankademy 로그인
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                아이디
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              로그인
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  소셜 로그인
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-[#03C75A] hover:bg-opacity-90 text-white font-medium rounded-md transition-colors"
              >
                <NaverIcon className="w-5 h-5 mr-2" />
                <span>네이버</span>
              </button>

              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md transition-colors"
              >
                <GoogleIcon className="w-5 h-5 mr-2" />
                <span>구글</span>
              </button>

              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-[#FEE500] hover:bg-opacity-90 text-gray-900 font-medium rounded-md transition-colors"
              >
                <KakaoIcon className="w-5 h-5 mr-2" />
                <span>카카오</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              계정이 없으신가요?{" "}
              <Link
                href="/signup"
                className="text-blue-500 hover:text-blue-400"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
