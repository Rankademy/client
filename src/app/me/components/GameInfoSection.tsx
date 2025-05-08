"use client";

import type React from "react";
import type { UserData, Position } from "@/app/types/user";

interface GameInfoSectionProps {
  userData: Pick<UserData, "mainPosition" | "subPosition">;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function GameInfoSection({
  userData,
  isEditing,
  onInputChange,
}: GameInfoSectionProps) {
  const positionOptions: Position[] = ["TOP", "JG", "MID", "ADC", "SUP"];

  const getPositionLabel = (position: Position) => {
    const labels: Record<Position, string> = {
      TOP: "탑",
      JG: "정글",
      MID: "미드",
      ADC: "원딜",
      SUP: "서포터",
    };
    return labels[position];
  };

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
        게임 정보
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            주 포지션
          </label>
          {isEditing ? (
            <select
              name="mainPosition"
              value={userData.mainPosition}
              onChange={onInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {positionOptions.map((pos) => (
                <option key={pos} value={pos}>
                  {getPositionLabel(pos)}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-blue-900 text-blue-300`}
              >
                {userData.mainPosition.substring(0, 1)}
              </div>
              <span>{getPositionLabel(userData.mainPosition)}</span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            부 포지션
          </label>
          {isEditing ? (
            <select
              name="subPosition"
              value={userData.subPosition}
              onChange={onInputChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {positionOptions.map((pos) => (
                <option key={pos} value={pos}>
                  {getPositionLabel(pos)}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-purple-900 text-purple-300`}
              >
                {userData.subPosition.substring(0, 1)}
              </div>
              <span>{getPositionLabel(userData.subPosition)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
