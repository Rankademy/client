"use client";

import type React from "react";
import type { UserData } from "@/app/types/user";

interface BioSectionProps {
  userData: Pick<UserData, "description">;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function BioSection({
  userData,
  isEditing,
  onInputChange,
}: BioSectionProps) {
  const { description } = userData;

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
        자기소개
      </h2>

      {isEditing ? (
        <textarea
          name="description"
          value={description}
          onChange={onInputChange}
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="자기소개를 입력하세요"
        ></textarea>
      ) : (
        <p className="text-gray-300 whitespace-pre-line">{description}</p>
      )}
    </div>
  );
}
