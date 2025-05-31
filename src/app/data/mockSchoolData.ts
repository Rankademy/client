export interface Champion {
  id: string;
  name: string;
  icon: string;
}

export interface Match {
  result: "win" | "loss";
  champion: Champion;
}

export interface Player {
  id: string;
  rank: number;
  name: string;
  nickname: string;
  tier: string;
  tierIcon: string;
  lp: number;
  winRate: number;
  matches: Match[];
  mostPlayed: Champion[];
  profileImage: string;
  title: string;
  department: string;
}

export interface Univ {
  id: string;
  name: string;
  logo: string;
  players: Player[];
}

export const mockUnivData: Record<string, Univ> = {
  "seoul-tech": {
    id: "seoul-tech",
    name: "서울과학기술대학교",
    logo: "/generic-Univ-logo.png",
    players: [
      {
        id: "1",
        rank: 1,
        name: "나카",
        nickname: "#Luffy",
        tier: "Challenger",
        tierIcon: "/tier-challenger.png",
        lp: 785,
        winRate: 66.4,
        matches: [
          {
            result: "win",
            champion: { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          },
          {
            result: "loss",
            champion: { id: "2", name: "Zed", icon: "/champion-2.png" },
          },
          {
            result: "win",
            champion: { id: "3", name: "Lee Sin", icon: "/champion-3.png" },
          },
          {
            result: "win",
            champion: { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          },
          {
            result: "loss",
            champion: { id: "4", name: "Ahri", icon: "/champion-4.png" },
          },
          {
            result: "win",
            champion: { id: "5", name: "Jinx", icon: "/champion-5.png" },
          },
        ],
        mostPlayed: [
          { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          { id: "3", name: "Lee Sin", icon: "/champion-3.png" },
          { id: "5", name: "Jinx", icon: "/champion-5.png" },
        ],
        profileImage: "/abstract-profile-silhouette.png",
        title: "탑차이",
        department: "컴퓨터공학과",
      },
      {
        id: "2",
        rank: 2,
        name: "루피",
        nickname: "#Nika",
        tier: "Grand Master",
        tierIcon: "/tier-grandmaster.png",
        lp: 690,
        winRate: 67.3,
        matches: [
          {
            result: "loss",
            champion: { id: "6", name: "Darius", icon: "/champion-6.png" },
          },
          {
            result: "loss",
            champion: { id: "7", name: "Garen", icon: "/champion-7.png" },
          },
          {
            result: "win",
            champion: { id: "8", name: "Lux", icon: "/champion-8.png" },
          },
          {
            result: "win",
            champion: { id: "9", name: "Ezreal", icon: "/champion-9.png" },
          },
          {
            result: "loss",
            champion: { id: "6", name: "Darius", icon: "/champion-6.png" },
          },
          {
            result: "win",
            champion: { id: "8", name: "Lux", icon: "/champion-8.png" },
          },
        ],
        mostPlayed: [
          { id: "6", name: "Darius", icon: "/champion-6.png" },
          { id: "8", name: "Lux", icon: "/champion-8.png" },
          { id: "9", name: "Ezreal", icon: "/champion-9.png" },
        ],
        profileImage: "/profile-2.png",
        title: "CS왕",
        department: "산업디자인학과",
      },
      {
        id: "3",
        rank: 3,
        name: "나미",
        nickname: "#Nami",
        tier: "Grand Master",
        tierIcon: "/tier-grandmaster.png",
        lp: 770,
        winRate: 68.4,
        matches: [
          {
            result: "win",
            champion: { id: "10", name: "Soraka", icon: "/champion-10.png" },
          },
          {
            result: "loss",
            champion: { id: "11", name: "Janna", icon: "/champion-11.png" },
          },
          {
            result: "loss",
            champion: { id: "12", name: "Lulu", icon: "/champion-12.png" },
          },
          {
            result: "loss",
            champion: { id: "10", name: "Soraka", icon: "/champion-10.png" },
          },
          {
            result: "loss",
            champion: { id: "11", name: "Janna", icon: "/champion-11.png" },
          },
          {
            result: "win",
            champion: { id: "12", name: "Lulu", icon: "/champion-12.png" },
          },
        ],
        mostPlayed: [
          { id: "10", name: "Soraka", icon: "/champion-10.png" },
          { id: "11", name: "Janna", icon: "/champion-11.png" },
          { id: "12", name: "Lulu", icon: "/champion-12.png" },
        ],
        profileImage: "/abstract-profile-3.png",
        title: "서폿 장인",
        department: "경영학과",
      },
      {
        id: "4",
        rank: 4,
        name: "조로",
        nickname: "#Zoro",
        tier: "Master",
        tierIcon: "/tier-master.png",
        lp: 250,
        winRate: 61.4,
        matches: [
          {
            result: "win",
            champion: { id: "13", name: "Fiora", icon: "/champion-13.png" },
          },
          {
            result: "loss",
            champion: { id: "14", name: "Riven", icon: "/champion-14.png" },
          },
          {
            result: "win",
            champion: { id: "15", name: "Irelia", icon: "/champion-15.png" },
          },
          {
            result: "win",
            champion: { id: "13", name: "Fiora", icon: "/champion-13.png" },
          },
          {
            result: "win",
            champion: { id: "14", name: "Riven", icon: "/champion-14.png" },
          },
          {
            result: "win",
            champion: { id: "15", name: "Irelia", icon: "/champion-15.png" },
          },
        ],
        mostPlayed: [
          { id: "13", name: "Fiora", icon: "/champion-13.png" },
          { id: "14", name: "Riven", icon: "/champion-14.png" },
          { id: "15", name: "Irelia", icon: "/champion-15.png" },
        ],
        profileImage: "/profile-4.png",
        title: "솔로킹",
        department: "기계공학과",
      },
      {
        id: "5",
        rank: 5,
        name: "상디",
        nickname: "#Sanji",
        tier: "Master",
        tierIcon: "/tier-master.png",
        lp: 150,
        winRate: 57.4,
        matches: [
          {
            result: "win",
            champion: { id: "16", name: "Thresh", icon: "/champion-16.png" },
          },
          {
            result: "loss",
            champion: {
              id: "17",
              name: "Blitzcrank",
              icon: "/champion-17.png",
            },
          },
          {
            result: "win",
            champion: { id: "18", name: "Leona", icon: "/champion-18.png" },
          },
          {
            result: "win",
            champion: { id: "16", name: "Thresh", icon: "/champion-16.png" },
          },
          {
            result: "loss",
            champion: {
              id: "17",
              name: "Blitzcrank",
              icon: "/champion-17.png",
            },
          },
          {
            result: "win",
            champion: { id: "18", name: "Leona", icon: "/champion-18.png" },
          },
        ],
        mostPlayed: [
          { id: "16", name: "Thresh", icon: "/champion-16.png" },
          { id: "17", name: "Blitzcrank", icon: "/champion-17.png" },
          { id: "18", name: "Leona", icon: "/champion-18.png" },
        ],
        profileImage: "/profile-5.png",
        title: "훅 장인",
        department: "전자공학과",
      },
      {
        id: "6",
        rank: 6,
        name: "초파",
        nickname: "#Chopper",
        tier: "Master",
        tierIcon: "/tier-master.png",
        lp: 140,
        winRate: 51.4,
        matches: [
          {
            result: "loss",
            champion: { id: "19", name: "Teemo", icon: "/champion-19.png" },
          },
          {
            result: "win",
            champion: { id: "20", name: "Yuumi", icon: "/champion-20.png" },
          },
          {
            result: "loss",
            champion: { id: "21", name: "Veigar", icon: "/champion-21.png" },
          },
          {
            result: "win",
            champion: { id: "19", name: "Teemo", icon: "/champion-19.png" },
          },
          {
            result: "win",
            champion: { id: "20", name: "Yuumi", icon: "/champion-20.png" },
          },
          {
            result: "loss",
            champion: { id: "21", name: "Veigar", icon: "/champion-21.png" },
          },
        ],
        mostPlayed: [
          { id: "19", name: "Teemo", icon: "/champion-19.png" },
          { id: "20", name: "Yuumi", icon: "/champion-20.png" },
          { id: "21", name: "Veigar", icon: "/champion-21.png" },
        ],
        profileImage: "/diverse-anime-characters.png",
        title: "정글 차이",
        department: "소프트웨어공학과",
      },
    ],
  },
  snu: {
    id: "snu",
    name: "서울대학교",
    logo: "/placeholder.svg?key=ec6oq",
    players: [
      {
        id: "7",
        rank: 1,
        name: "김철수",
        nickname: "#SNU_ACE",
        tier: "Challenger",
        tierIcon: "/tier-challenger.png",
        lp: 890,
        winRate: 72.1,
        matches: [
          {
            result: "win",
            champion: { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          },
          {
            result: "win",
            champion: { id: "2", name: "Zed", icon: "/champion-2.png" },
          },
          {
            result: "win",
            champion: { id: "3", name: "Lee Sin", icon: "/champion-3.png" },
          },
          {
            result: "loss",
            champion: { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          },
          {
            result: "win",
            champion: { id: "4", name: "Ahri", icon: "/champion-4.png" },
          },
          {
            result: "win",
            champion: { id: "5", name: "Jinx", icon: "/champion-5.png" },
          },
        ],
        mostPlayed: [
          { id: "1", name: "Yasuo", icon: "/champion-1.png" },
          { id: "2", name: "Zed", icon: "/champion-2.png" },
          { id: "3", name: "Lee Sin", icon: "/champion-3.png" },
        ],
        profileImage: "/placeholder.svg?key=snu1",
        title: "미드 황제",
        department: "컴퓨터공학부",
      },
    ],
  },
};
