"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PlayerData } from "@/app/data/mockSchoolData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface RankingTableProps {
  data: PlayerData[];
}

type SortField = "tier" | "winRate" | "admissionYear";
type SortDirection = "asc" | "desc";

export default function RankingTable({ data }: RankingTableProps) {
  const [sortField, setSortField] = useState<SortField>("tier");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const router = useRouter();

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortField === "tier") {
      const tierOrder = {
        CHALLENGER: 7,
        GRANDMASTER: 6,
        MASTER: 5,
        DIAMOND: 4,
        PLATINUM: 3,
        GOLD: 2,
        SILVER: 1,
        BRONZE: 0,
      };

      const tierA = tierOrder[a.tier.tier as keyof typeof tierOrder];
      const tierB = tierOrder[b.tier.tier as keyof typeof tierOrder];

      if (tierA === tierB) {
        const rankOrder = { I: 4, II: 3, III: 2, IV: 1 };
        const rankA = rankOrder[a.tier.rank as keyof typeof rankOrder];
        const rankB = rankOrder[b.tier.rank as keyof typeof rankOrder];

        if (rankA === rankB) {
          return sortDirection === "asc"
            ? a.tier.leaguePoints - b.tier.leaguePoints
            : b.tier.leaguePoints - a.tier.leaguePoints;
        }

        return sortDirection === "asc" ? rankA - rankB : rankB - rankA;
      }

      return sortDirection === "asc" ? tierA - tierB : tierB - tierA;
    }

    if (sortField === "winRate") {
      return sortDirection === "asc"
        ? a.winRate - b.winRate
        : b.winRate - a.winRate;
    }

    if (sortField === "admissionYear") {
      const yearA = Number.parseInt(a.admissionYear.replace("학번", ""));
      const yearB = Number.parseInt(b.admissionYear.replace("학번", ""));
      return sortDirection === "asc" ? yearA - yearB : yearB - yearA;
    }

    return 0;
  });

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
    // 데이터 드래곤에서 포지션 아이콘 URL 가져오기
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

  const handleUserClick = (puuid: number) => {
    router.push(`/users/${puuid.toString()}`);
  };

  return (
    <div className="rounded-md border border-gray-700 shadow-sm overflow-hidden bg-gray-900">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 border-gray-700">
            <TableHead className="w-16 text-center text-gray-200">
              순위
            </TableHead>
            <TableHead className="w-16 text-gray-200">아이콘</TableHead>
            <TableHead className="text-gray-200">소환사</TableHead>
            <TableHead className="text-center text-gray-200">
              <Button
                variant="ghost"
                onClick={() => handleSort("tier")}
                className="flex items-center justify-center space-x-1 px-0 font-semibold text-gray-200 hover:text-white mx-auto"
              >
                티어
                {sortField === "tier" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </Button>
            </TableHead>
            <TableHead className="text-gray-200">
              <Button
                variant="ghost"
                onClick={() => handleSort("winRate")}
                className="flex items-center space-x-1 px-0 font-semibold text-gray-200 hover:text-white"
              >
                승률
                {sortField === "winRate" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell text-gray-200">
              주요 챔피언
            </TableHead>
            <TableHead className="hidden sm:table-cell text-gray-200">
              포지션
            </TableHead>
            <TableHead className="text-gray-200">학과</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((player, index) => (
            <TableRow
              key={player.puuid}
              className="hover:bg-gray-700 border-gray-700 transition-colors"
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "rgba(14, 165, 233, 0.2)"
                    : "rgba(14, 165, 233, 0.1)",
              }}
            >
              <TableCell className="text-center font-medium text-white">
                {index + 1}
              </TableCell>
              <TableCell>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/${player.summonerIcon}.png`}
                    alt={`${player.summonerName} 프로필 아이콘`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div
                  className="font-medium text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  onClick={() => handleUserClick(player.puuid)}
                >
                  {player.summonerName}
                </div>
                <div className="text-xs text-gray-400">
                  #{player.summonerTag}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <img
                    src={getTierIcon(player.tier.tier) || "/placeholder.svg"}
                    alt={`${player.tier.tier} 티어`}
                    className="w-6 h-6"
                    onError={(e) => {
                      // 이미지 로드 실패 시 대체 이미지 또는 숨김 처리
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <div className={getTierColor(player.tier.tier)}>
                      {player.tier.tier} {player.tier.rank}
                    </div>
                    <div className="text-xs text-gray-400">
                      {player.tier.leaguePoints} LP
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-white">
                  {(player.winRate * 100).toFixed(1)}%
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex space-x-1">
                  {player.topMosts.map((champion, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full overflow-hidden"
                      title={champion}
                    >
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${champion}.png`}
                        alt={champion}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      getPositionIcon(player.mainPosition) || "/placeholder.svg"
                    }
                    alt={`${player.mainPosition} 포지션`}
                    className="w-5 h-5 filter invert"
                    title={player.mainPosition}
                    onError={(e) => {
                      // 이미지 로드 실패 시 대체 이미지 또는 숨김 처리
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <Badge
                    className={`${getPositionColor(
                      player.mainPosition
                    )} text-white`}
                  >
                    {player.mainPosition}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-white">{player.major}</div>
                <div className="text-xs text-gray-400">
                  {player.admissionYear}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
