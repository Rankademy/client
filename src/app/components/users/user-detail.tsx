"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { UserDetailData, KDA } from "@/app/data/user-detail-data";
import { Calendar, Clock, Trophy, Target, Sword } from "lucide-react";

interface UserDetailProps {
  userDetail: UserDetailData | null;
}

export default function UserDetailComponent({ userDetail }: UserDetailProps) {
  console.log("UserDetailComponent - userDetail:", userDetail);

  // userDetail이 없는 경우 에러 방지
  if (!userDetail) {
    console.log("UserDetailComponent - No userDetail provided");
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-white text-xl">
          사용자 정보를 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  // 필수 필드들이 존재하는지 확인
  if (
    !userDetail.summonerName ||
    !userDetail.tierInfo ||
    !userDetail.topMosts ||
    !userDetail.topMatches
  ) {
    console.log("UserDetailComponent - Missing required fields in userDetail");
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-white text-xl">사용자 정보가 불완전합니다.</div>
      </div>
    );
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "CHALLENGER":
        return "text-purple-400 font-bold";
      case "GRANDMASTER":
        return "text-red-400 font-bold";
      case "MASTER":
        return "text-pink-400 font-bold";
      case "DIAMOND":
        return "text-blue-400 font-bold";
      case "PLATINUM":
        return "text-teal-400 font-bold";
      case "GOLD":
        return "text-yellow-400 font-bold";
      case "SILVER":
        return "text-gray-300 font-bold";
      case "BRONZE":
        return "text-amber-600 font-bold";
      default:
        return "text-gray-400";
    }
  };

  const getTierIcon = (tier: string) => {
    const tierLower = tier.toLowerCase();
    return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${tierLower}.png`;
  };

  const getPositionColor = (position: string) => {
    switch (position) {
      case "TOP":
        return "bg-red-500";
      case "JG":
        return "bg-green-500";
      case "MID":
        return "bg-blue-500";
      case "ADC":
        return "bg-purple-500";
      case "SUP":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPositionIcon = (position: string) => {
    switch (position) {
      case "TOP":
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-top.svg";
      case "JG":
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-jungle.svg";
      case "MID":
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-middle.svg";
      case "ADC":
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-bottom.svg";
      case "SUP":
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-support.svg";
      default:
        return "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/svg/position-fill.svg";
    }
  };

  const getResultColor = (result: string) => {
    switch (result) {
      case "WIN":
        return "text-green-400 bg-green-900/20";
      case "LOSE":
        return "text-red-400 bg-red-900/20";
      case "REGAME":
        return "text-yellow-400 bg-yellow-900/20";
      default:
        return "text-gray-400 bg-gray-900/20";
    }
  };

  const formatKDA = (kda: KDA) => {
    if (!kda) return "0/0/0";
    return `${kda.kill || 0}/${kda.death || 0}/${kda.assist || 0}`;
  };

  const formatPlayTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (date: Date | string) => {
    try {
      const dateObj = typeof date === "string" ? new Date(date) : date;
      return dateObj.toLocaleDateString("ko-KR", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "날짜 오류";
    }
  };

  return (
    <div className="space-y-6">
      {/* 프로필 헤더 */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${
                  userDetail.summonerIcon || 1
                }.png`}
                alt={`${userDetail.summonerName} 프로필 아이콘`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">
                  {userDetail.summonerName}
                </h1>
                <span className="text-gray-400">#{userDetail.summonerTag}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {userDetail.description || "설명이 없습니다."}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      getTierIcon(userDetail.tierInfo.tier) ||
                      "/placeholder.svg"
                    }
                    alt={`${userDetail.tierInfo.tier} 티어`}
                    className="w-8 h-8"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <div className={getTierColor(userDetail.tierInfo.tier)}>
                      {userDetail.tierInfo.tier} {userDetail.tierInfo.rank}
                    </div>
                    <div className="text-sm text-gray-400">
                      {userDetail.tierInfo.lp} LP
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-medium">
                    승률 {((userDetail.winRate || 0) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-300 mb-1">{userDetail.univName}</div>
              <div className="text-gray-400 text-sm">{userDetail.major}</div>
              <div className="text-gray-400 text-sm">
                {userDetail.admissionYear}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 포지션 정보 */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>포지션</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src={
                    getPositionIcon(userDetail.mainPosition) ||
                    "/placeholder.svg"
                  }
                  alt={`${userDetail.mainPosition} 포지션`}
                  className="w-6 h-6 filter invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <Badge
                  className={`${getPositionColor(
                    userDetail.mainPosition
                  )} text-white`}
                >
                  주 포지션: {userDetail.mainPosition}
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={
                    getPositionIcon(userDetail.subPosition) ||
                    "/placeholder.svg"
                  }
                  alt={`${userDetail.subPosition} 포지션`}
                  className="w-6 h-6 filter invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <Badge
                  className={`${getPositionColor(
                    userDetail.subPosition
                  )} text-white`}
                >
                  부 포지션: {userDetail.subPosition}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 주요 챔피언 */}
        <Card className="bg-gray-800 border-gray-700 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>Most 3.</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {userDetail.topMosts && userDetail.topMosts.length > 0 ? (
                userDetail.topMosts.map((champion, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${champion.championId}.png`}
                        alt={champion.championId}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "/placeholder.svg?height=48&width=48";
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {champion.championId}
                      </div>
                      <div className="text-sm text-gray-400">
                        KDA {(champion.kda || 0).toFixed(1)} | 승률{" "}
                        {((champion.winRate || 0) * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-500">
                        {champion.totalMatcheCnt || 0}게임
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400">
                  모스트 챔피언 정보가 없습니다.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 최근 전적 */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Sword className="h-5 w-5" />
            <span>최근 전적</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userDetail.topMatches && userDetail.topMatches.length > 0 ? (
              userDetail.topMatches.map((match, index) => {
                // 계산된 값들
                const rating =
                  match.myKda.death === 0
                    ? match.myKda.kill + match.myKda.assist
                    : (match.myKda.kill + match.myKda.assist) /
                      match.myKda.death;
                const csPerMin = (match.cs / (match.playTime / 60)).toFixed(1);
                const killParticipation =
                  match.totalKda.kill === 0
                    ? 0
                    : ((match.myKda.kill + match.myKda.assist) /
                        match.totalKda.kill) *
                      100;

                const isWin = match.result === "WIN";
                const bgColor = isWin
                  ? "bg-blue-900/20 border-l-4 border-l-blue-500"
                  : "bg-red-900/20 border-l-4 border-l-red-500";

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg hover:opacity-80 transition-all ${bgColor}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      {/* 게임 정보 */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${match.championId}.png`}
                            alt={match.championId}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src =
                                "/placeholder.svg?height=48&width=48";
                            }}
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge className={getResultColor(match.result)}>
                              {match.result}
                            </Badge>
                            <span className="text-gray-400">
                              Lv.{match.level || 1}
                            </span>
                            <span className="text-white font-medium">
                              {match.championId}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(match.playedAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatPlayTime(match.playTime)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* KDA */}
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">
                          {formatKDA(match.myKda)}
                        </div>
                        <div className="text-sm text-gray-400">
                          평점:{" "}
                          <span className="text-yellow-400">
                            {rating.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* CS */}
                      <div className="text-center">
                        <div className="text-white font-medium text-lg">
                          {match.cs || 0}
                        </div>
                        <div className="text-sm text-gray-400">
                          분당:{" "}
                          <span className="text-green-400">{csPerMin}</span>
                        </div>
                      </div>

                      {/* 팀 KDA & 킬관여율 */}
                      <div className="text-center">
                        <div className="text-gray-300 font-medium">
                          {formatKDA(match.totalKda)}
                        </div>
                        <div className="text-sm text-gray-400">
                          킬관여:{" "}
                          <span className="text-purple-400">
                            {killParticipation.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-gray-400">최근 전적 정보가 없습니다.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
