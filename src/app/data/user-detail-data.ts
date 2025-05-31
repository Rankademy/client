export interface KDA {
  kill: number;
  death: number;
  assist: number;
}

export interface TierInfoDTO {
  rank: string;
  tier: string;
  lp: number;
}

export interface MostInfoDTO {
  championId: string;
  kda: number;
  winRate: number;
  totalMatcheCnt: number;
}

export interface TopMatchDTO {
  playedAt: Date;
  result: string; // WIN, LOSE, REGAME
  playTime: number;
  championId: string;
  level: number;
  totalKda: KDA;
  myKda: KDA;
  cs: number;
}

export interface UserDetailData {
  puuid: number;
  summonerName: string;
  summonerTag: string;
  summonerIcon: number;
  description: string;
  tierInfo: TierInfoDTO;
  winRate: number;
  univName: string;
  admissionYear: string;
  major: string;
  topMosts: MostInfoDTO[];
  mainPosition: string;
  subPosition: string;
  topMatches: TopMatchDTO[];
}

// 목 데이터 1 - TechMaster
export const userDetail1: UserDetailData = {
  puuid: 1,
  summonerName: "TechMaster",
  summonerTag: "KR1",
  summonerIcon: 29,
  description:
    "서울과학기술대학교 컴퓨터공학과 재학 중입니다. 미드 라이너로 활동하고 있으며, 팀워크를 중시합니다.",
  tierInfo: {
    rank: "I",
    tier: "CHALLENGER",
    lp: 1024,
  },
  winRate: 0.68,
  univName: "서울과학기술대학교",
  admissionYear: "19학번",
  major: "컴퓨터공학과",
  topMosts: [
    {
      championId: "Leblanc",
      kda: 2.8,
      winRate: 0.72,
      totalMatcheCnt: 45,
    },
    {
      championId: "Ahri",
      kda: 2.5,
      winRate: 0.68,
      totalMatcheCnt: 38,
    },
    {
      championId: "Zed",
      kda: 3.1,
      winRate: 0.65,
      totalMatcheCnt: 32,
    },
  ],
  mainPosition: "MID",
  subPosition: "TOP",
  topMatches: [
    {
      playedAt: new Date("2024-01-15T14:30:00"),
      result: "WIN",
      playTime: 1845, // 30분 45초
      championId: "Leblanc",
      level: 16,
      totalKda: { kill: 45, death: 23, assist: 67 },
      myKda: { kill: 12, death: 2, assist: 8 },
      cs: 245,
    },
    {
      playedAt: new Date("2024-01-15T13:15:00"),
      result: "LOSE",
      playTime: 2156, // 35분 56초
      championId: "Ahri",
      level: 15,
      totalKda: { kill: 32, death: 41, assist: 58 },
      myKda: { kill: 8, death: 6, assist: 12 },
      cs: 198,
    },
    {
      playedAt: new Date("2024-01-15T11:45:00"),
      result: "WIN",
      playTime: 1623, // 27분 3초
      championId: "Zed",
      level: 17,
      totalKda: { kill: 38, death: 19, assist: 52 },
      myKda: { kill: 15, death: 1, assist: 7 },
      cs: 267,
    },
    {
      playedAt: new Date("2024-01-14T20:30:00"),
      result: "WIN",
      playTime: 1934, // 32분 14초
      championId: "Leblanc",
      level: 16,
      totalKda: { kill: 42, death: 28, assist: 71 },
      myKda: { kill: 11, death: 3, assist: 15 },
      cs: 223,
    },
    {
      playedAt: new Date("2024-01-14T19:15:00"),
      result: "LOSE",
      playTime: 2567, // 42분 47초
      championId: "Ahri",
      level: 18,
      totalKda: { kill: 29, death: 35, assist: 48 },
      myKda: { kill: 6, death: 8, assist: 9 },
      cs: 289,
    },
    {
      playedAt: new Date("2024-01-14T17:45:00"),
      result: "WIN",
      playTime: 1456, // 24분 16초
      championId: "Zed",
      level: 15,
      totalKda: { kill: 51, death: 22, assist: 63 },
      myKda: { kill: 18, death: 2, assist: 11 },
      cs: 201,
    },
    {
      playedAt: new Date("2024-01-14T16:20:00"),
      result: "WIN",
      playTime: 1789, // 29분 49초
      championId: "Leblanc",
      level: 16,
      totalKda: { kill: 39, death: 25, assist: 58 },
      myKda: { kill: 13, death: 4, assist: 12 },
      cs: 234,
    },
    {
      playedAt: new Date("2024-01-14T14:55:00"),
      result: "LOSE",
      playTime: 2234, // 37분 14초
      championId: "Ahri",
      level: 17,
      totalKda: { kill: 26, death: 38, assist: 41 },
      myKda: { kill: 5, death: 7, assist: 8 },
      cs: 256,
    },
    {
      playedAt: new Date("2024-01-14T13:30:00"),
      result: "WIN",
      playTime: 1678, // 27분 58초
      championId: "Zed",
      level: 16,
      totalKda: { kill: 44, death: 21, assist: 55 },
      myKda: { kill: 16, death: 3, assist: 9 },
      cs: 243,
    },
    {
      playedAt: new Date("2024-01-14T12:10:00"),
      result: "WIN",
      playTime: 1523, // 25분 23초
      championId: "Leblanc",
      level: 15,
      totalKda: { kill: 47, death: 18, assist: 61 },
      myKda: { kill: 14, death: 1, assist: 13 },
      cs: 218,
    },
  ],
};

// 목 데이터 2 - SNU Emperor
export const userDetail2: UserDetailData = {
  puuid: 11,
  summonerName: "SNU Emperor",
  summonerTag: "SNU1",
  summonerIcon: 28,
  description:
    "서울대학교 컴퓨터공학부 학생입니다. 미드 라이너로 활동하며, 전략적인 플레이를 선호합니다.",
  tierInfo: {
    rank: "I",
    tier: "CHALLENGER",
    lp: 1156,
  },
  winRate: 0.72,
  univName: "서울대학교",
  admissionYear: "18학번",
  major: "컴퓨터공학부",
  topMosts: [
    {
      championId: "LeeSin",
      kda: 3.2,
      winRate: 0.75,
      totalMatcheCnt: 52,
    },
    {
      championId: "Yasuo",
      kda: 2.9,
      winRate: 0.71,
      totalMatcheCnt: 41,
    },
    {
      championId: "Azir",
      kda: 3.5,
      winRate: 0.69,
      totalMatcheCnt: 35,
    },
  ],
  mainPosition: "MID",
  subPosition: "ADC",
  topMatches: [
    {
      playedAt: new Date("2024-01-15T15:45:00"),
      result: "WIN",
      playTime: 1756, // 29분 16초
      championId: "LeeSin",
      level: 17,
      totalKda: { kill: 48, death: 19, assist: 72 },
      myKda: { kill: 14, death: 1, assist: 16 },
      cs: 278,
    },
    {
      playedAt: new Date("2024-01-15T14:20:00"),
      result: "WIN",
      playTime: 1634, // 27분 14초
      championId: "Yasuo",
      level: 16,
      totalKda: { kill: 41, death: 22, assist: 59 },
      myKda: { kill: 13, death: 3, assist: 11 },
      cs: 251,
    },
    {
      playedAt: new Date("2024-01-15T12:55:00"),
      result: "LOSE",
      playTime: 2345, // 39분 5초
      championId: "Azir",
      level: 18,
      totalKda: { kill: 31, death: 39, assist: 52 },
      myKda: { kill: 9, death: 5, assist: 14 },
      cs: 312,
    },
    {
      playedAt: new Date("2024-01-14T21:30:00"),
      result: "WIN",
      playTime: 1823, // 30분 23초
      championId: "LeeSin",
      level: 16,
      totalKda: { kill: 43, death: 26, assist: 68 },
      myKda: { kill: 12, death: 2, assist: 18 },
      cs: 245,
    },
    {
      playedAt: new Date("2024-01-14T20:10:00"),
      result: "WIN",
      playTime: 1567, // 26분 7초
      championId: "Yasuo",
      level: 15,
      totalKda: { kill: 52, death: 21, assist: 64 },
      myKda: { kill: 17, death: 2, assist: 12 },
      cs: 223,
    },
    {
      playedAt: new Date("2024-01-14T18:45:00"),
      result: "WIN",
      playTime: 1789, // 29분 49초
      championId: "Azir",
      level: 17,
      totalKda: { kill: 39, death: 23, assist: 61 },
      myKda: { kill: 11, death: 3, assist: 15 },
      cs: 289,
    },
    {
      playedAt: new Date("2024-01-14T17:20:00"),
      result: "LOSE",
      playTime: 2156, // 35분 56초
      championId: "LeeSin",
      level: 17,
      totalKda: { kill: 28, death: 34, assist: 45 },
      myKda: { kill: 7, death: 6, assist: 9 },
      cs: 267,
    },
    {
      playedAt: new Date("2024-01-14T15:55:00"),
      result: "WIN",
      playTime: 1445, // 24분 5초
      championId: "Yasuo",
      level: 15,
      totalKda: { kill: 49, death: 18, assist: 58 },
      myKda: { kill: 16, death: 1, assist: 10 },
      cs: 198,
    },
    {
      playedAt: new Date("2024-01-14T14:30:00"),
      result: "WIN",
      playTime: 1678, // 27분 58초
      championId: "Azir",
      level: 16,
      totalKda: { kill: 44, death: 25, assist: 67 },
      myKda: { kill: 13, death: 4, assist: 16 },
      cs: 256,
    },
    {
      playedAt: new Date("2024-01-14T13:05:00"),
      result: "WIN",
      playTime: 1534, // 25분 34초
      championId: "LeeSin",
      level: 15,
      totalKda: { kill: 46, death: 19, assist: 59 },
      myKda: { kill: 15, death: 2, assist: 12 },
      cs: 234,
    },
  ],
};

// 유저 ID로 상세 데이터를 가져오는 함수
export function getUserDetailData(userId: string): UserDetailData | null {
  switch (userId) {
    case "1":
      return userDetail1;
    case "11":
      return userDetail2;
    default:
      return null;
  }
}
