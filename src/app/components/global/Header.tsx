"use client";

import Link from "next/link";
import { LogIn, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "@/app/context/auth-context";

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    // 로그아웃 후 홈페이지로 이동하는 로직은 필요하다면 추가
  };

  return (
    <header className="bg-black py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* 왼쪽 여백 공간 */}
        <div className="w-32 md:w-40"></div>

        {/* 중앙 로고 */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Rankademy
          </Link>
        </div>

        {/* 오른쪽 버튼 그룹 */}
        <div className="w-32 md:w-40 flex justify-end">
          {isAuthenticated ? (
            <>
              <Link
                href="/me"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors mr-4"
              >
                <UserCircle size={18} />
                <span>{user?.username || "프로필"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <LogOut size={18} />
                <span>로그아웃</span>
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors mr-4"
              >
                <LogIn size={18} />
                <span>로그인</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <UserCircle size={18} />
                <span>회원가입</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
