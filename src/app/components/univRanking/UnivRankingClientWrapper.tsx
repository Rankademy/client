"use client";

import { useRouter } from "next/navigation";
import UnivRankingsTable from "./UnivRankingsTable";
import type { Player } from "@/app/data/mockSchoolData";

interface Props {
  players: Player[];
  univName: string;
}

export default function ClientWrapper({ players, univName }: Props) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/player?id=${id}&univ=${encodeURIComponent(univName)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <header className="bg-white shadow-sm py-4 px-6 flex flex-col items-center relative">
        <h1 className="text-2xl font-bold mb-2">Rankademy</h1>
        <div className="flex items-center gap-2">
          {/* UI 생략 가능 또는 props로 받기 */}
          <span className="text-sm">{univName}</span>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-6">
        <UnivRankingsTable players={players} onPlayerClick={handleClick} />
      </main>
    </div>
  );
}
