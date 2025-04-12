// src/components/Rankings.tsx
"use client";

import Image from "next/image";
import { CircleUser, Info } from "lucide-react";

type Ranking = {
  rank: number;
  school: string;
  tier: string;
  lp: string;
  stats: number[];
  record: number;
};

export default function Rankings({ data }: { data: Ranking[] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2"></div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Rankademy</h2>
        </div>
        <div className="flex items-center gap-2">
          <CircleUser className="w-6 h-6" />
          <span className="text-sm">내 정보</span>
        </div>
      </header>

      {/* Podium Section */}
      <section className="container mx-auto mt-8">
        <div className="flex justify-center items-end relative h-64">
          {/* 2nd Place */}
          <div className="relative w-1/4 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-2">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="서울대학교"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-300">서울대학교</span>
            <div className="bg-orange-700 h-32 w-full flex items-center justify-center">
              <div className="bg-gray-300 w-16 h-16 rounded-md flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">2</span>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="relative w-1/4 flex flex-col items-center z-10">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-2">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="서울과학기술대학교"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-300">서울과학기술대학교</span>
            <div className="bg-orange-700 h-40 w-full flex items-center justify-center">
              <div className="bg-yellow-300 w-16 h-16 rounded-md flex items-center justify-center">
                <span className="text-4xl font-bold text-yellow-800">1</span>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="relative w-1/4 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-2">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="부산대학교"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-300">부산대학교</span>
            <div className="bg-orange-700 h-24 w-full flex items-center justify-center">
              <div className="bg-amber-700 w-16 h-16 rounded-md flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-200">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {item.rank}
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt={item.school}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {item.school}
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
                <div className="text-xs text-gray-300">{item.tier}</div>
                <div className="text-xs text-blue-300">{item.lp}</div>
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
