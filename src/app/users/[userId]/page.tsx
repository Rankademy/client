import { getUserDetailData } from "@/app/data/user-detail-data";
import Header from "@/app/components/univRanking/header";
import UserDetailComponent from "@/app/components/users/user-detail";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    userId: string;
  };
}

export default function UserDetailPage({ params }: PageProps) {
  console.log("UserDetailPage - userId:", params.userId);

  const userDetail = getUserDetailData(params.userId);
  console.log("UserDetailPage - userDetail:", userDetail);

  if (!userDetail) {
    console.log(
      "UserDetailPage - No user detail found, redirecting to notFound"
    );
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header univName={userDetail.univName} />
      <main className="container mx-auto py-8 px-4">
        <UserDetailComponent userDetail={userDetail} />
      </main>
    </div>
  );
}
