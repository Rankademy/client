"use client";

import { useRouter } from "next/navigation";
import { CircleUser, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.refresh(); // 또는 router.push("/")로 리디렉션도 가능
  };

  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <div></div>

      <div className="text-center">
        <h2 className="text-2xl font-bold">Rankademy</h2>
      </div>

      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/me")}
          >
            <CircleUser className="w-6 h-6" />
            <span className="text-sm">내 정보</span>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer text-red-400"
            onClick={handleLogout}
          >
            <LogOut className="w-6 h-6" />
            <span className="text-sm">로그아웃</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <LogIn className="w-6 h-6" />
            <span className="text-sm">로그인</span>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/register")}
          >
            <LogIn className="w-6 h-6" />
            <span className="text-sm">회원가입</span>
          </div>
        </div>
      )}
    </header>
  );
}
