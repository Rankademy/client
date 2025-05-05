"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Edit2, Check, X, Shield } from "lucide-react";
import type { Position, UserData } from "../types/user";

// 임시 데이터
const mockUserData: UserData = {
  id: 1,
  username: "player123",
  email: "user@example.com",
  riotId: "Player#KR1",
  univName: "서울대학교",
  univEmail: "student@snu.ac.kr",
  univVerified: true,
  description:
    "안녕하세요! 미드 라인을 주로 플레이하는 플레이어입니다. 팀 플레이를 중요시하며 소통을 잘하는 편입니다.",
  mainPosition: "MID",
  subPosition: "SUP",
  groups: [
    { id: 1, name: "서울대 LOL 동아리" },
    { id: 2, name: "미드 라이너 모임" },
  ],
  createdAt: new Date("2023-01-15"),
};

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<UserData>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 구현에서는 API 호출로 대체
    setTimeout(() => {
      setUserData(mockUserData);
      setEditData(mockUserData);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // 취소 시 원래 데이터로 복원
      setEditData(userData || {});
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    // 실제 구현에서는 API 호출로 대체
    setUserData({ ...userData!, ...editData } as UserData);
    setIsEditing(false);
    alert("프로필이 업데이트되었습니다.");
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">사용자 정보를 불러올 수 없습니다.</p>
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-400 mt-4 inline-block"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Rankademy</span>
          </Link>

          <button
            onClick={handleEditToggle}
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

        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold">
              {userData.username}님의 프로필
            </h1>
            <p className="text-gray-400 mt-1">
              가입일: {formatDate(userData.createdAt)}
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 기본 정보 섹션 */}
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
                        value={editData.username || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-white">{userData.username}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      이메일
                    </label>
                    <p className="text-white">{userData.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      라이엇 ID
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="riotId"
                        value={editData.riotId || ""}
                        onChange={handleInputChange}
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

              {/* 학교 정보 섹션 */}
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
                        value={editData.univName || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-white">{userData.univName}</p>
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
                          value={editData.univEmail || ""}
                          onChange={handleInputChange}
                          className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-white flex-1">
                          {userData.univEmail}
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
            </div>

            {/* 게임 정보 섹션 */}
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
                      value={editData.mainPosition || ""}
                      onChange={handleInputChange}
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
                      value={editData.subPosition || ""}
                      onChange={handleInputChange}
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

            {/* 자기소개 섹션 */}
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
                자기소개
              </h2>

              {isEditing ? (
                <textarea
                  name="description"
                  value={editData.description || ""}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="자기소개를 입력하세요"
                ></textarea>
              ) : (
                <p className="text-gray-300 whitespace-pre-line">
                  {userData.description}
                </p>
              )}
            </div>

            {/* 소속 그룹 섹션 */}
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
                소속 그룹
              </h2>

              {userData.groups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.groups.map((group) => (
                    <div key={group.id} className="bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium">{group.name}</h3>
                      {group.description && (
                        <p className="text-sm text-gray-400 mt-1">
                          {group.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">소속된 그룹이 없습니다.</p>
              )}
            </div>

            {/* 저장 버튼 */}
            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                >
                  <Check size={18} />
                  <span>저장하기</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
