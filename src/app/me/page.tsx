"use client";

import type React from "react";

import { useState, useEffect } from "react";
import type { UserData } from "../types/user";
import LoadingState from "./components/LoadingState";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTitle from "./components/ProfileTitle";
import BasicInfoSection from "./components/BasicInfoSection";
import SchoolInfoSection from "./components/SchoolInfoSection";
import GameInfoSection from "./components/GameInfoSection";
import BioSection from "./components/BioSection";
import GroupsSection from "./components/GroupsSection";
import SaveButton from "./components/SaveButton";
import { mockUserData } from "../data/mock-user";

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<UserData>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const UserData = mockUserData.data;

  useEffect(() => {
    // 실제 구현에서는 API 호출로 대체
    setTimeout(() => {
      try {
        setUserData(UserData);
        setEditData(UserData);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
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
    if (userData) {
      setUserData({ ...userData, ...editData } as UserData);
      setIsEditing(false);
      alert("프로필이 업데이트되었습니다.");
    }
  };

  // 로딩 상태 또는 에러 상태 처리
  if (isLoading) {
    return <LoadingState isLoading={true} hasError={false} />;
  }

  if (hasError || !userData) {
    return <LoadingState isLoading={false} hasError={true} />;
  }

  // 편집 중인 데이터와 원본 데이터를 병합하여 현재 표시할 데이터 생성
  const currentUserData = {
    ...userData,
    ...editData,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <ProfileHeader
          userData={{
            username: currentUserData.username,
            createdAt: currentUserData.createdAt,
          }}
          isEditing={isEditing}
          onEditToggle={handleEditToggle}
          onSave={handleSave}
        />

        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <ProfileTitle
            userData={{
              username: currentUserData.username,
              createdAt: currentUserData.createdAt,
            }}
          />

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 기본 정보 섹션 */}
              <BasicInfoSection
                userData={{
                  username: currentUserData.username,
                  email: currentUserData.email,
                  riotId: currentUserData.riotId,
                }}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />

              {/* 학교 정보 섹션 */}
              <SchoolInfoSection
                userData={{
                  univName: currentUserData.univName,
                  univEmail: currentUserData.univEmail,
                  univVerified: currentUserData.univVerified,
                }}
                isEditing={isEditing}
                onInputChange={handleInputChange}
              />
            </div>

            {/* 게임 정보 섹션 */}
            <GameInfoSection
              userData={{
                mainPosition: currentUserData.mainPosition,
                subPosition: currentUserData.subPosition,
              }}
              isEditing={isEditing}
              onInputChange={handleInputChange}
            />

            {/* 자기소개 섹션 */}
            <BioSection
              userData={{
                description: currentUserData.description,
              }}
              isEditing={isEditing}
              onInputChange={handleInputChange}
            />

            {/* 소속 그룹 섹션 */}
            <GroupsSection
              userData={{
                groups: userData.groups,
              }}
            />

            {/* 저장 버튼 */}
            <SaveButton isEditing={isEditing} onSave={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
}
