"use client";

import Image from "next/image";
import { CircleUser, Info } from "lucide-react";

{
  /* Header */
}

export default function Header() {
  return (
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
  );
}
