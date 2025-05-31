import Rankings from "@/app/components/univRanking/Rankings";

export default function UnivRankingsPage({
  params,
}: {
  params: { univName: string };
}) {
  return <Rankings params={params} />; // ✅ params 전달
}
