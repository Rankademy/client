export type Ranker = {
  id: number;
  username: string;
  icon: string;
};

export type University = {
  univId: number;
  univName: string;
  univLogo: string;
  tierAvg: number;
  totalMatches: number;
  winCnt: number;
  totalUserCnt: number;
  ranker: Ranker;
};

export type UniversityResponse = {
  message: string;
  data: University[];
};
