"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  univName?: string;
}

export default function Header({ univName }: HeaderProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const handleBackClick = () => {
    router.push("/");
  };

  // 지원하는 이미지 확장자들
  const imageExtensions = ["png", "jpg", "jpeg", "webp", "svg", "gif"];

  // 첫 번째로 존재하는 이미지 파일을 찾는 함수
  const getUniversityLogoPath = (univName: string) => {
    // 첫 번째 확장자로 시작 (일반적으로 png를 우선)
    return `/univ-logo/${univName}.png`;
  };

  // 이미지 로드 실패 시 다른 확장자로 시도하는 함수
  const handleImageError = (univName: string, currentExtensionIndex = 0) => {
    if (currentExtensionIndex < imageExtensions.length - 1) {
      const nextExtension = imageExtensions[currentExtensionIndex + 1];
      return `/univ-logo/${univName}.${nextExtension}`;
    }
    // 모든 확장자를 시도했지만 실패한 경우
    setImageError(true);
    return "/placeholder.svg?height=20&width=20&text=Logo";
  };

  const universityName = univName || "서울과학기술대학교";
  const logoPath = getUniversityLogoPath(universityName);

  return (
    <header className="bg-gray-800 text-white px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* 왼쪽 영역 */}
        <div className="flex items-center space-x-3">
          <ChevronLeft
            className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-colors"
            onClick={handleBackClick}
          />
          <span className="text-sm">학교 랭킹</span>
        </div>

        {/* 중앙 영역 */}
        <div className="text-center">
          <h1 className="text-lg font-bold">Rankademy</h1>
          <div className="flex items-center justify-center space-x-2">
            <UniversityLogo
              universityName={universityName}
              imageExtensions={imageExtensions}
            />
            <p className="text-xs text-gray-300">{universityName}</p>
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="text-sm cursor-pointer hover:text-gray-300 transition-colors">
          내 정보
        </div>
      </div>
    </header>
  );
}

// 대학교 로고를 처리하는 별도 컴포넌트
function UniversityLogo({
  universityName,
  imageExtensions,
}: {
  universityName: string;
  imageExtensions: string[];
}) {
  const [currentExtensionIndex, setCurrentExtensionIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const currentExtension = imageExtensions[currentExtensionIndex];
  const logoPath = `/univ-emblem/${universityName}.${currentExtension}`;

  const handleImageError = () => {
    if (currentExtensionIndex < imageExtensions.length - 1) {
      // 다음 확장자로 시도
      setCurrentExtensionIndex((prev) => prev + 1);
    } else {
      // 모든 확장자를 시도했지만 실패
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <Image
        src="/placeholder.svg?height=20&width=20&text=Logo"
        alt={`${universityName} 로고`}
        width={20}
        height={20}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <Image
      src={logoPath || "/placeholder.svg"}
      alt={`${universityName} 로고`}
      width={20}
      height={20}
      className="rounded-full object-cover"
      onError={handleImageError}
    />
  );
}
