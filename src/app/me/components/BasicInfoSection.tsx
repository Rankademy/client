"use client";

import type React from "react";
import type { UserData } from "@/app/types/user";

interface BasicInfoSectionProps {
  userData: Pick<UserData, "username" | "email" | "riotId">;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicInfoSection({
  userData,
  isEditing,
  onInputChange,
}: BasicInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
        기본 정보
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            사용자 이름
          </label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={onInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-white">{userData.username || "정보 없음"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            이메일
          </label>
          <p className="text-white">{userData.email || "정보 없음"}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            라이엇 ID
          </label>
          {isEditing ? (
            <input
              type="text"
              name="riotId"
              value={userData.riotId || ""}
              onChange={onInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="라이엇 ID를 입력하세요"
            />
          ) : (
            <p className="text-white">
              {userData.riotId || "연동된 라이엇 ID가 없습니다"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
