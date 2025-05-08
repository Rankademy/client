import type { UserResponse } from "../types/user";

export const mockUserData: UserResponse = {
  message: "유저 데이터를 성공적으로 불러왔습니다.",
  data: {
    id: 1,
    username: "player123",
    email: "user@example.com",
    riotId: "Player#KR1",
    univName: "서울대학교",
    univEmail: "student@snu.ac.kr",
    univVerified: true,
    description:
      "안녕하세요! 미드 라인을 주로 플레이하는 플레이어입니다. 팀 플레이를 중요시하며 소통을 잘하는 편입니다.",
    mainPosition: "MID",
    subPosition: "SUP",
    groups: [
      { id: 1, name: "서울대 LOL 동아리" },
      { id: 2, name: "미드 라이너 모임" },
    ],
    createdAt: new Date("2023-01-15"),
  },
};
