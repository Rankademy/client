"use client";

import Image from "next/image";
import { CircleUser, Info } from "lucide-react";

type Ranking = {
  univId: number;
  univName: string;
  univLogo: string;
  tierAvg: number;
  totalMatches: number;
  winCnt: number;
  totalUserCnt: number;
  ranker: {
    id: number;
    username: string;
    icon: string;
  };

  stats: number[];
  record: number;
};

export default function Rankings({ data }: { data: Ranking[] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Ranking Table */}
      <section className="container mx-auto mt-8 pb-16">
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-700 p-3 text-sm font-medium">
            <div className="col-span-1 text-center">순위</div>
            <div className="col-span-2">학교</div>
            <div className="col-span-2 text-center">티어/LP</div>
            <div className="col-span-5 text-center">통계</div>
            <div className="col-span-2 text-center">대회 기록</div>
          </div>

          {data.slice(3).map((item, index) => (
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
              <div className="col-span-2 flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt={item.univName}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {item.univName}
              </div>
              <div className="col-span-2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Tier"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-300">{item.tierAvg}</div>
                <div className="text-xs text-blue-300">{item.winCnt}</div>
              </div>
              <div className="col-span-5 flex justify-around">
                {item.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <Info className="w-4 h-4" />
                    </div>
                    <span className="text-xs">{stat}%</span>
                  </div>
                ))}
              </div>
              <div className="col-span-2">
                <div className="flex flex-col gap-1">
                  <div className="text-xs text-gray-300 text-center">
                    최근 경기
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 w-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${item.record}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>승률</span>
                    <span>{item.record}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
