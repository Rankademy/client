export interface UnivUserData {
  puuid: string; // string으로 수정
  summonerName: string;
  summonerTag: string;
  summonerIcon: string;
  tier: number;
  winRate: number;
  topMosts: string[];
  mainPosition: string;
  admissionYear: string;
  major: string;
}

export interface UnivApiResponse {
  message: string;
  data: UnivUserData[];
}

export interface Univ {
  id: string;
  name: string;
  players?: UnivUserData[];
}
