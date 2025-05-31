"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import type { University as Ranking } from "@/app/types/ranking";
import { useRouter } from "next/navigation";
import { useState } from "react";

// 대학교 로고를 처리하는 컴포넌트
function UniversityLogo({
  universityName,
  size = 80,
  className = "",
}: {
  universityName: string;
  size?: number;
  className?: string;
}) {
  const [currentExtensionIndex, setCurrentExtensionIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const imageExtensions = ["png", "jpg", "jpeg", "webp", "svg", "gif"];
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
      <div
        className={`bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold ${className}`}
        style={{ width: size, height: size }}
      >
        {universityName.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={logoPath || "/placeholder.svg"}
      alt={`${universityName} 로고`}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      onError={handleImageError}
    />
  );
}

export default function Podium({ data }: { data: Ranking[] }) {
  const sortedTop3 = data.sort((a, b) => a.univId - b.univId);
  const first = sortedTop3.find((item) => item.univId === 1);
  const second = sortedTop3.find((item) => item.univId === 2);
  const third = sortedTop3.find((item) => item.univId === 3);

  // 티어 이름 변환 함수
  const getTierName = (tierAvg: number) => {
    if (tierAvg >= 2700) return "Challenger";
    if (tierAvg >= 2500) return "Grandmaster";
    if (tierAvg >= 2300) return "Master";
    if (tierAvg >= 2100) return "Diamond 1";
    if (tierAvg >= 2000) return "Diamond 2";
    if (tierAvg >= 1900) return "Diamond 3";
    if (tierAvg >= 1800) return "Diamond 4";
    return "Emerald+";
  };

  // 티어 이미지 경로 가져오기
  const getTierImagePath = (tierName: string) => {
    // 티어 이름에서 숫자 제거 (예: "Diamond 4" -> "diamond")
    const baseTier = tierName.split(" ")[0].toLowerCase();
    return `/ranked-emblem/Rank=${baseTier}.png`;
  };

  const router = useRouter();

  const handleUnivClick = (univName: string) => {
    router.push(`/univRanking/${univName}`);
  };

  return (
    <section className="container mx-auto mt-12 mb-16">
      <h2 className="text-2xl font-bold text-center mb-8">TOP 3</h2>

      {/* 포디움 배경 - 더 입체적인 느낌을 위한 그라데이션 배경 */}
      <div className="relative mx-auto max-w-4xl h-[400px] bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-2xl">
        {/* 장식적 요소 */}
        <div className="absolute inset-0 bg-blue-500/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="flex justify-center items-end h-full relative pb-4">
          {/* 2nd Place */}
          <div className="relative w-1/3 flex flex-col items-center px-2">
            {/* 로고와 대학명 */}
            <div className="absolute -top-28 flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-3 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => second && handleUnivClick(second.univName)}
              >
                {second && (
                  <UniversityLogo universityName={second.univName} size={80} />
                )}
              </div>
            </div>

            {/* 포디움 */}
            <div className="bg-gradient-to-t from-gray-700 to-gray-600 h-[190px] w-full rounded-t-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] flex flex-col items-center justify-end pb-4 border-t-2 border-gray-500">
              <div className="text-center mb-4">
                <div
                  className="text-sm font-medium text-gray-300 mb-1 cursor-pointer hover:text-white transition-colors"
                  onClick={() => second && handleUnivClick(second.univName)}
                >
                  {second?.univName}
                </div>
                <div className="flex items-center justify-center gap-2">
                  {second && (
                    <div className="relative w-8 h-8">
                      <Image
                        src={
                          getTierImagePath(getTierName(second.tierAvg)) ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={`${getTierName(second.tierAvg)} 티어 아이콘`}
                        width={30}
                        height={30}
                        className="object-contain"
                        onError={(e) => {
                          // 이미지 로드 실패 시 기본 이미지로 대체
                          const target = e.target as HTMLImageElement;
                          target.src = "/ranked-emblem/emblem-unranked.png";
                        }}
                      />
                    </div>
                  )}
                  <span className="text-xs text-blue-400">
                    {second && getTierName(second.tierAvg)}
                  </span>
                </div>
              </div>

              <div className="bg-gray-300 w-16 h-16 rounded-md flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-gray-800">2</span>
              </div>

              <div className="mt-3 flex items-center gap-1">
                <Trophy size={14} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  {second?.winCnt}승
                </span>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="relative w-1/3 flex flex-col items-center z-10 px-2">
            {/* 로고 */}
            <div className="absolute -top-32 flex flex-col items-center">
              <div
                className="w-28 h-28 rounded-full bg-yellow-900/30 border-2 border-yellow-600 flex items-center justify-center mb-3 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => first && handleUnivClick(first.univName)}
              >
                {first && (
                  <UniversityLogo universityName={first.univName} size={90} />
                )}
              </div>
            </div>

            {/* 포디움 */}
            <div className="bg-gradient-to-t from-yellow-700 to-yellow-600 h-[230px] w-full rounded-t-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] flex flex-col items-center justify-end pb-4 border-t-2 border-yellow-500">
              <div className="text-center mb-4">
                <div
                  className="text-sm font-medium text-yellow-300 mb-1 cursor-pointer hover:text-yellow-100 transition-colors"
                  onClick={() => first && handleUnivClick(first.univName)}
                >
                  {first?.univName}
                </div>
                <div className="flex items-center justify-center gap-2">
                  {first && (
                    <div className="relative w-8 h-8">
                      <Image
                        src={
                          getTierImagePath(getTierName(first.tierAvg)) ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={`${getTierName(first.tierAvg)} 티어 아이콘`}
                        width={30}
                        height={30}
                        className="object-contain"
                        onError={(e) => {
                          // 이미지 로드 실패 시 기본 이미지로 대체
                          const target = e.target as HTMLImageElement;
                          target.src = "/ranked-emblem/emblem-unranked.png";
                        }}
                      />
                    </div>
                  )}
                  <span className="text-xs text-yellow-400">
                    {first && getTierName(first.tierAvg)}
                  </span>
                </div>
              </div>

              <div className="bg-yellow-300 w-16 h-16 rounded-md flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-yellow-800">1</span>
              </div>

              <div className="mt-3 flex items-center gap-1">
                <Trophy size={16} className="text-yellow-300" />
                <span className="text-sm font-bold text-yellow-300">
                  {first?.winCnt}승
                </span>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="relative w-1/3 flex flex-col items-center px-2">
            {/* 로고 */}
            <div className="absolute -top-24 flex flex-col items-center">
              <div
                className="w-22 h-22 rounded-full bg-gray-800 border-2 border-amber-700 flex items-center justify-center mb-3 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => third && handleUnivClick(third.univName)}
              >
                {third && (
                  <UniversityLogo universityName={third.univName} size={70} />
                )}
              </div>
            </div>

            {/* 포디움 */}
            <div className="bg-gradient-to-t from-amber-900 to-amber-800 h-[165px] w-full rounded-t-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] flex flex-col items-center justify-end pb-4 border-t-2 border-amber-700">
              <div className="text-center mb-4">
                <div
                  className="text-sm font-medium text-amber-300 mb-1 cursor-pointer hover:text-amber-100 transition-colors"
                  onClick={() => third && handleUnivClick(third.univName)}
                >
                  {third?.univName}
                </div>
                <div className="flex items-center justify-center gap-2">
                  {third && (
                    <div className="relative w-8 h-8">
                      <Image
                        src={
                          getTierImagePath(getTierName(third.tierAvg)) ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={`${getTierName(third.tierAvg)} 티어 아이콘`}
                        width={30}
                        height={30}
                        className="object-contain"
                        onError={(e) => {
                          // 이미지 로드 실패 시 기본 이미지로 대체
                          const target = e.target as HTMLImageElement;
                          target.src = "/ranked-emblem/emblem-unranked.png";
                        }}
                      />
                    </div>
                  )}
                  <span className="text-xs text-amber-400">
                    {third && getTierName(third.tierAvg)}
                  </span>
                </div>
              </div>

              <div className="bg-amber-700 w-16 h-16 rounded-md flex items-center justify-center shadow-md">
                <span className="text-4xl font-bold text-amber-200">3</span>
              </div>

              <div className="mt-3 flex items-center gap-1">
                <Trophy size={14} className="text-amber-400" />
                <span className="text-sm font-medium text-amber-400">
                  {third?.winCnt}승
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 바닥 그림자 효과 */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </section>
  );
}
