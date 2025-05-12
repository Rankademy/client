"use client";

import type React from "react";
import type { UserData } from "@/app/types/user";
import { Shield } from "lucide-react";

interface SchoolInfoSectionProps {
  userData: Pick<UserData, "univName" | "univEmail" | "univVerified">;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SchoolInfoSection({
  userData,
  isEditing,
  onInputChange,
}: SchoolInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
        학교 정보
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            학교
          </label>
          {isEditing ? (
            <input
              type="text"
              name="univName"
              value={userData.univName}
              onChange={onInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-white">{userData.univName || "정보 없음"}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            학교 이메일
          </label>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <input
                type="email"
                name="univEmail"
                value={userData.univEmail}
                onChange={onInputChange}
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-white flex-1">
                {userData.univEmail || "정보 없음"}
              </p>
            )}

            {userData.univVerified && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                <Shield className="w-3 h-3 mr-1" />
                인증됨
              </span>
            )}
          </div>
        </div>

        {!userData.univVerified && (
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
            학교 이메일 인증하기
          </button>
        )}
      </div>
    </div>
  );
}
