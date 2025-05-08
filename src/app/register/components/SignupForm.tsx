"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupFormProps {
  onSuccess?: () => void;
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePasswords()) {
      // 회원가입 로직 구현
      console.log("회원가입 시도:", { username, password });

      // 성공 콜백 호출 또는 로그인 페이지로 이동
      if (onSuccess) {
        onSuccess();
      } else {
        // 실제 구현에서는 회원가입 API 호출 후 성공 시 로그인 페이지로 이동
        router.push("/login");
      }
    }
  };

  return (
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

      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-300"
        >
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validatePasswords}
          className={`w-full px-3 py-2 bg-gray-800 border ${
            passwordError ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
        {passwordError && (
          <p className="text-sm text-red-500 mt-1">{passwordError}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
      >
        회원가입
      </button>
    </form>
  );
}
