import type { UserData } from "@/app/types/user";

interface ProfileTitleProps {
  userData: Pick<UserData, "username" | "createdAt">;
}

export default function ProfileTitle({ userData }: ProfileTitleProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold">{userData.username}님의 프로필</h1>
      <p className="text-gray-400 mt-1">
        가입일: {formatDate(userData.createdAt)}
      </p>
    </div>
  );
}
