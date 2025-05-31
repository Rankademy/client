"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Trophy } from "lucide-react";
import type { University } from "@/app/types/ranking";
import { useRouter } from "next/navigation";

// 대학교 로고를 처리하는 컴포넌트
function UniversityLogo({
  universityName,
  size = 24,
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
        className={`bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold ${className}`}
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

type RankingsProps = {
  data: University[];
};

export default function Rankings({ data }: RankingsProps) {
  // 상위 3개 학교는 Podium에 표시되므로 제외
  const rankingsData = data.slice(3);

  // 처음에는 5개만 표시
  const [visibleCount, setVisibleCount] = useState(5);

  // 더보기 버튼 클릭 시 10개 추가
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // 현재 표시할 데이터
  const visibleData = rankingsData.slice(0, visibleCount);

  // 더 표시할 데이터가 있는지 확인
  const hasMoreData = visibleCount < rankingsData.length;

  const router = useRouter();

  // 티어 이름 변환 함수
  const getTierName = (tierAvg: number) => {
    if (tierAvg >= 3000) return "Challenger";
    if (tierAvg >= 2900) return "Grandmaster";
    if (tierAvg >= 2800) return "Master";
    if (tierAvg >= 2700) return "Diamond 1";
    if (tierAvg >= 2600) return "Diamond 2";
    if (tierAvg >= 2500) return "Diamond 3";
    if (tierAvg >= 2400) return "Diamond 4";
    if (tierAvg >= 2300) return "Emerald 1";
    if (tierAvg >= 2200) return "Emerald 2";
    if (tierAvg >= 2100) return "Emerald 3";
    if (tierAvg >= 2000) return "Emerald 4";
    if (tierAvg >= 1900) return "Platinum 1";
    if (tierAvg >= 1800) return "Platinum 2";
    if (tierAvg >= 1700) return "Platinum 3";
    if (tierAvg >= 1600) return "Platinum 4";
    if (tierAvg >= 1500) return "Gold 1";
    if (tierAvg >= 1400) return "Gold 2";
    if (tierAvg >= 1300) return "Gold 3";
    if (tierAvg >= 1200) return "Gold 4";
    if (tierAvg >= 1100) return "Silver 1";
    if (tierAvg >= 1000) return "Silver 2";
    if (tierAvg >= 900) return "Silver 3";
    if (tierAvg >= 800) return "Silver 4";
    if (tierAvg >= 700) return "Bronze 1";
    if (tierAvg >= 600) return "Bronze 2";
    if (tierAvg >= 500) return "Bronze 3";
    if (tierAvg >= 400) return "Bronze 4";
    if (tierAvg >= 300) return "Iron 1";
    if (tierAvg >= 200) return "Iron 2";
    if (tierAvg >= 100) return "Iron 3";
    if (tierAvg >= 0) return "Iron 4";

    return "Unranked";
  };

  // 티어 이미지 경로 가져오기
  const getTierImagePath = (tierName: string) => {
    // 티어 이름에서 숫자 제거 (예: "Diamond 4" -> "diamond")
    const baseTier = tierName.split(" ")[0].toLowerCase();
    return `/ranked-emblem/Rank=${baseTier}.png`;
  };

  // LP 계산 함수
  const getLP = (tierAvg: number) => {
    const tier = Math.floor(tierAvg / 100) * 100;
    const lp = tierAvg - tier;
    return `${lp}LP`;
  };

  // 안전한 이미지 URL 생성 함수 (랭커 아이콘용)
  const getSafeImageUrl = (url: string | undefined) => {
    if (!url) return "/abstract-profile.png";

    // 외부 URL인 경우 그대로 반환
    if (url.startsWith("http")) return url;

    // 내부 경로인 경우 placeholder로 대체
    return url || "/abstract-profile.png";
  };

  const handleUnivClick = (univName: string) => {
    router.push(`/univRanking/${univName}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Ranking Table */}
      <section className="container mx-auto mt-8 pb-16">
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-700 p-3 text-sm font-medium">
            <div className="col-span-1 text-center">순위</div>
            <div className="col-span-2 text-center">학교</div>
            <div className="col-span-2 text-center">평균 티어</div>
            <div className="col-span-5 text-center">랭커</div>
            <div className="col-span-2 text-center">승리 수</div>
          </div>

          {visibleData.map((item, index) => {
            const tierName = getTierName(item.tierAvg);
            const tierImagePath = getTierImagePath(tierName);

            return (
              <div
                key={index}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(14, 165, 233, 0.2)"
                      : "rgba(14, 165, 233, 0.1)",
                }}
                className="grid grid-cols-12 p-3 text-sm items-center"
              >
                <div className="col-span-1 text-center font-bold">
                  {item.univId}
                </div>
                <div
                  className="col-span-2 flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => handleUnivClick(item.univName)}
                >
                  <UniversityLogo universityName={item.univName} size={24} />
                  <span className="truncate">{item.univName}</span>
                </div>
                <div className="col-span-2 flex flex-col items-center">
                  {/* 티어 아이콘 직접 사용 */}
                  <div className="relative w-10 h-10">
                    <Image
                      src={tierImagePath || "/placeholder.svg"}
                      alt={`${tierName} 티어 아이콘`}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => {
                        // 이미지 로드 실패 시 기본 이미지로 대체
                        const target = e.target as HTMLImageElement;
                        target.src = "/ranked-emblem/emblem-unranked.png";
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-300 mt-1">{tierName}</div>
                  <div className="text-xs text-blue-300">
                    {getLP(item.tierAvg)}
                  </div>
                </div>
                <div className="col-span-5 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    {item.ranker ? (
                      <>
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                          {item.ranker.icon ? (
                            <Image
                              src={
                                getSafeImageUrl(item.ranker.icon) ||
                                "/placeholder.svg"
                              }
                              alt={item.ranker.username}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-600"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{item.ranker.username}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-400">대표 랭커 없음</p>
                    )}
                  </div>
                </div>
                <div className=" col-span-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-2 text-yellow-500">
                      <Trophy size={16} />
                      <span className="font-bold">{item.winCnt}승</span>
                    </div>
                    <p className="flex items-center justify-center text-xs text-gray-400">
                      총 {item.totalUserCnt}명의 유저
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 더보기 버튼 */}
          {hasMoreData && (
            <div className="p-4 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <span>더보기</span>
                <ChevronDown size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
