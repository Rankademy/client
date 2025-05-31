import Header from "@/app/components/univRanking/header";
import RankingTable from "@/app/components/univRanking/UnivRankingsTable";
import NoDataMessage from "@/app/components/univRanking/no-data-message";
import { getUniversityData } from "@/app/data/mockSchoolData";
// Adjust the import path as necessary

interface PageProps {
  params: {
    univName: string;
  };
}

export default function UnivRankingPage({ params }: PageProps) {
  const univName = decodeURIComponent(params.univName);
  const universityData = getUniversityData(univName);

  return (
    <div className="min-h-screen bg-black">
      <Header univName={univName} />
      <main className="container mx-auto py-8 px-4">
        {universityData ? (
          <RankingTable data={universityData} />
        ) : (
          <NoDataMessage univName={univName} />
        )}
      </main>
    </div>
  );
}
