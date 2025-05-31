"use client";

import Image from "next/image";
import type { Player } from "@/app/data/mockSchoolData";

interface UnivRankingsTableProps {
  players: Player[];
  onPlayerClick: (playerId: string) => void;
}

export default function UnivRankingsTable({
  players,
  onPlayerClick,
}: UnivRankingsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-50 text-gray-700">
            <th className="py-3 px-4 text-left w-16">#</th>
            <th className="py-3 px-4 text-left">Player</th>
            <th className="py-3 px-4 text-center">Tier/LP</th>
            <th className="py-3 px-4 text-center">Win Rate</th>
            <th className="py-3 px-4 text-center">Recent Matches</th>
            <th className="py-3 px-4 text-center">Most Champions</th>
            <th className="py-3 px-4 text-center">Info</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr
              key={player.id}
              className={`border-t border-gray-200 hover:bg-blue-100 ${
                player.rank % 2 === 1 ? "bg-blue-50" : "bg-white"
              }`}
            >
              <td className="py-4 px-4 text-center font-bold">{player.rank}</td>
              <td className="py-4 px-4">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => onPlayerClick(player.id)}
                >
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={player.profileImage || "/placeholder.svg"}
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium hover:text-blue-600 transition-colors">
                      {player.name}{" "}
                      <span className="text-gray-500">{player.nickname}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center gap-2">
                    <div className="relative h-6 w-6">
                      <Image
                        src={player.tierIcon || "/placeholder.svg"}
                        alt={player.tier}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">{player.tier}</span>
                  </div>
                  <span className="text-sm text-gray-600">{player.lp}LP</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">{player.winRate}%</td>
              <td className="py-4 px-4">
                <div className="flex justify-center gap-1">
                  {player.matches.map((match, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative h-6 w-6 mb-1">
                        <Image
                          src={match.champion.icon || "/placeholder.svg"}
                          alt={match.champion.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-xs text-white ${
                          match.result === "win" ? "bg-blue-500" : "bg-red-500"
                        }`}
                      >
                        {match.result === "win" ? "W" : "L"}
                      </div>
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex justify-center gap-2">
                  {player.mostPlayed.map((champion, idx) => (
                    <div key={idx} className="relative h-10 w-10">
                      <Image
                        src={champion.icon || "/placeholder.svg"}
                        alt={champion.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-medium text-blue-600">
                    {player.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {player.department}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
