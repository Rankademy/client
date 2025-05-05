export type Position = "TOP" | "JG" | "MID" | "ADC" | "SUP";

export interface Group {
  id: number;
  name: string;
  description?: string;
}

export interface UserData {
  id: number;
  username: string;
  email: string;
  riotId: string | null;
  univName: string;
  univEmail: string;
  univVerified: boolean;
  description: string;
  mainPosition: Position;
  subPosition: Position;
  groups: Group[];
  createdAt: Date;
}

export interface UserResponse {
  message: string;
  data: UserData;
}
