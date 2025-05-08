"use client";

import type { UserData } from "@/app/types/user";
import Link from "next/link";
import { ArrowLeft, Edit2, X } from "lucide-react";

interface ProfileHeaderProps {
  userData?: Pick<UserData, "username" | "createdAt">;
  isEditing: boolean;
  onEditToggle: () => void;
  onSave: () => void;
}

export default function ProfileHeader({
  userData,
  isEditing,
  onEditToggle,
}: ProfileHeaderProps) {
  // userData가 undefined일 경우 기본값 제공
  const username = userData?.username || "사용자";

  return (
    <div className="flex justify-between items-center mb-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>메인으로 돌아가기</span>
      </Link>

      <button
        onClick={onEditToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          isEditing
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        } transition-colors`}
      >
        {isEditing ? (
          <>
            <X size={18} />
            <span>취소</span>
          </>
        ) : (
          <>
            <Edit2 size={18} />
            <span>프로필 수정</span>
          </>
        )}
      </button>
    </div>
  );
}
