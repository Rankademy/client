export interface TierDTO {
  tier: string;
  rank: string;
  leaguePoints: number;
}

export interface PlayerData {
  puuid: number;
  summonerName: string;
  summonerTag: string;
  summonerIcon: string;
  tier: TierDTO;
  winRate: number;
  topMosts: string[];
  mainPosition: string;
  admissionYear: string;
  major: string;
}

// 서울과학기술대학교 데이터
export const seoulTechData: PlayerData[] = [
  {
    puuid: 1,
    summonerName: "TechMaster",
    summonerTag: "KR1",
    summonerIcon: "29",
    tier: {
      tier: "CHALLENGER",
      rank: "I",
      leaguePoints: 1024,
    },
    winRate: 0.68,
    topMosts: ["Leblanc", "Ahri", "Zed"],
    mainPosition: "MID",
    admissionYear: "19학번",
    major: "컴퓨터공학과",
  },
  {
    puuid: 2,
    summonerName: "SeoulTechJG",
    summonerTag: "KR2",
    summonerIcon: "12",
    tier: {
      tier: "GRANDMASTER",
      rank: "I",
      leaguePoints: 876,
    },
    winRate: 0.65,
    topMosts: ["Lee Sin", "Graves", "Viego"],
    mainPosition: "JG",
    admissionYear: "20학번",
    major: "전자공학과",
  },
  {
    puuid: 3,
    summonerName: "기술대왕",
    summonerTag: "KR3",
    summonerIcon: "5",
    tier: {
      tier: "MASTER",
      rank: "I",
      leaguePoints: 789,
    },
    winRate: 0.62,
    topMosts: ["Azir", "Viktor", "Orianna"],
    mainPosition: "MID",
    admissionYear: "20학번",
    major: "정보통신공학과",
  },
  {
    puuid: 4,
    summonerName: "STU Support",
    summonerTag: "KR4",
    summonerIcon: "18",
    tier: {
      tier: "DIAMOND",
      rank: "I",
      leaguePoints: 75,
    },
    winRate: 0.59,
    topMosts: ["Thresh", "Nautilus", "Leona"],
    mainPosition: "SUP",
    admissionYear: "21학번",
    major: "소프트웨어학과",
  },
  {
    puuid: 5,
    summonerName: "과기대ADC",
    summonerTag: "KR5",
    summonerIcon: "7",
    tier: {
      tier: "DIAMOND",
      rank: "II",
      leaguePoints: 56,
    },
    winRate: 0.57,
    topMosts: ["Jinx", "Ezreal", "Kai'Sa"],
    mainPosition: "ADC",
    admissionYear: "19학번",
    major: "경영학과",
  },
  {
    puuid: 6,
    summonerName: "TechTop",
    summonerTag: "KR6",
    summonerIcon: "25",
    tier: {
      tier: "PLATINUM",
      rank: "I",
      leaguePoints: 89,
    },
    winRate: 0.55,
    topMosts: ["Aatrox", "Jax", "Gnar"],
    mainPosition: "TOP",
    admissionYear: "22학번",
    major: "기계공학과",
  },
  {
    puuid: 7,
    summonerName: "서울과기대생",
    summonerTag: "KR7",
    summonerIcon: "10",
    tier: {
      tier: "PLATINUM",
      rank: "II",
      leaguePoints: 45,
    },
    winRate: 0.53,
    topMosts: ["Caitlyn", "Aphelios", "Varus"],
    mainPosition: "ADC",
    admissionYear: "21학번",
    major: "산업공학과",
  },
  {
    puuid: 8,
    summonerName: "AI학과정글",
    summonerTag: "KR8",
    summonerIcon: "15",
    tier: {
      tier: "GOLD",
      rank: "I",
      leaguePoints: 78,
    },
    winRate: 0.51,
    topMosts: ["Jarvan IV", "Xin Zhao", "Trundle"],
    mainPosition: "JG",
    admissionYear: "22학번",
    major: "인공지능학과",
  },
  {
    puuid: 9,
    summonerName: "데사과학생",
    summonerTag: "KR9",
    summonerIcon: "22",
    tier: {
      tier: "GOLD",
      rank: "II",
      leaguePoints: 34,
    },
    winRate: 0.49,
    topMosts: ["Nidalee", "Elise", "Olaf"],
    mainPosition: "JG",
    admissionYear: "20학번",
    major: "데이터사이언스학과",
  },
  {
    puuid: 10,
    summonerName: "SeoulTech10",
    summonerTag: "KR10",
    summonerIcon: "9",
    tier: {
      tier: "SILVER",
      rank: "I",
      leaguePoints: 67,
    },
    winRate: 0.47,
    topMosts: ["Jhin", "Ashe", "Xayah"],
    mainPosition: "ADC",
    admissionYear: "19학번",
    major: "건축학과",
  },
];

// 서울대학교 데이터
export const snuData: PlayerData[] = [
  {
    puuid: 11,
    summonerName: "SNU Emperor",
    summonerTag: "SNU1",
    summonerIcon: "28",
    tier: {
      tier: "CHALLENGER",
      rank: "I",
      leaguePoints: 1156,
    },
    winRate: 0.72,
    topMosts: ["Faker", "Yasuo", "Azir"],
    mainPosition: "MID",
    admissionYear: "18학번",
    major: "컴퓨터공학부",
  },
  {
    puuid: 12,
    summonerName: "관악산호랑이",
    summonerTag: "SNU2",
    summonerIcon: "14",
    tier: {
      tier: "GRANDMASTER",
      rank: "I",
      leaguePoints: 945,
    },
    winRate: 0.69,
    topMosts: ["Graves", "Kindred", "Nidalee"],
    mainPosition: "JG",
    admissionYear: "19학번",
    major: "경영학과",
  },
  {
    puuid: 13,
    summonerName: "Seoul Nat Univ",
    summonerTag: "SNU3",
    summonerIcon: "3",
    tier: {
      tier: "GRANDMASTER",
      rank: "II",
      leaguePoints: 823,
    },
    winRate: 0.66,
    topMosts: ["Syndra", "Orianna", "Cassiopeia"],
    mainPosition: "MID",
    admissionYear: "20학번",
    major: "수학과",
  },
  {
    puuid: 14,
    summonerName: "SNU Guardian",
    summonerTag: "SNU4",
    summonerIcon: "21",
    tier: {
      tier: "MASTER",
      rank: "I",
      leaguePoints: 234,
    },
    winRate: 0.63,
    topMosts: ["Thresh", "Pyke", "Bard"],
    mainPosition: "SUP",
    admissionYear: "21학번",
    major: "심리학과",
  },
  {
    puuid: 15,
    summonerName: "관악구ADC",
    summonerTag: "SNU5",
    summonerIcon: "11",
    tier: {
      tier: "MASTER",
      rank: "II",
      leaguePoints: 156,
    },
    winRate: 0.61,
    topMosts: ["Aphelios", "Jinx", "Caitlyn"],
    mainPosition: "ADC",
    admissionYear: "19학번",
    major: "물리학과",
  },
  {
    puuid: 16,
    summonerName: "SNU TopLaner",
    summonerTag: "SNU6",
    summonerIcon: "26",
    tier: {
      tier: "DIAMOND",
      rank: "I",
      leaguePoints: 89,
    },
    winRate: 0.58,
    topMosts: ["Camille", "Fiora", "Riven"],
    mainPosition: "TOP",
    admissionYear: "22학번",
    major: "기계공학부",
  },
  {
    puuid: 17,
    summonerName: "서울대생",
    summonerTag: "SNU7",
    summonerIcon: "16",
    tier: {
      tier: "DIAMOND",
      rank: "III",
      leaguePoints: 23,
    },
    winRate: 0.56,
    topMosts: ["Lucian", "Vayne", "Draven"],
    mainPosition: "ADC",
    admissionYear: "21학번",
    major: "화학과",
  },
  {
    puuid: 18,
    summonerName: "관악산정글러",
    summonerTag: "SNU8",
    summonerIcon: "19",
    tier: {
      tier: "PLATINUM",
      rank: "I",
      leaguePoints: 67,
    },
    winRate: 0.54,
    topMosts: ["Hecarim", "Kha'Zix", "Evelynn"],
    mainPosition: "JG",
    admissionYear: "22학번",
    major: "생명과학부",
  },
  {
    puuid: 19,
    summonerName: "SNU Student",
    summonerTag: "SNU9",
    summonerIcon: "24",
    tier: {
      tier: "PLATINUM",
      rank: "III",
      leaguePoints: 12,
    },
    winRate: 0.52,
    topMosts: ["Lulu", "Soraka", "Janna"],
    mainPosition: "SUP",
    admissionYear: "20학번",
    major: "영어영문학과",
  },
  {
    puuid: 20,
    summonerName: "관악구거주자",
    summonerTag: "SNU10",
    summonerIcon: "8",
    tier: {
      tier: "GOLD",
      rank: "I",
      leaguePoints: 45,
    },
    winRate: 0.49,
    topMosts: ["Malphite", "Shen", "Ornn"],
    mainPosition: "TOP",
    admissionYear: "19학번",
    major: "사회학과",
  },
];

// 학교별 데이터를 가져오는 함수
export function getUniversityData(univName: string): PlayerData[] | null {
  switch (univName) {
    case "서울과학기술대학교":
      return seoulTechData;
    case "서울대학교":
      return snuData;
    default:
      return null; // 데이터가 없는 경우 null 반환
  }
}

// 기존 mockData는 서울과학기술대학교 데이터로 유지
export const mockData = seoulTechData;
