"use client";

import Image from "next/image";

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
};

export default function Podium({ data }: { data: Ranking[] }) {
  const sortedTop3 = data.sort((a, b) => a.univId - b.univId);
  const first = sortedTop3.find((item) => item.univId === 1);
  const second = sortedTop3.find((item) => item.univId === 2);
  const third = sortedTop3.find((item) => item.univId === 3);
  return (
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
          <span className="text-sm text-gray-300">{second?.univName}</span>
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
          <span className="text-sm text-gray-300">{first?.univName}</span>
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
          <span className="text-sm text-gray-300">{third?.univName}</span>
          <div className="bg-orange-700 h-24 w-full flex items-center justify-center">
            <div className="bg-amber-700 w-16 h-16 rounded-md flex items-center justify-center">
              <span className="text-4xl font-bold text-amber-200">3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
