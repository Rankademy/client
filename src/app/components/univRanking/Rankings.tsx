import { notFound } from "next/navigation";
import { UnivService } from "@/app/services/UnivService";
import ClientWrapper from "./UnivRankingClientWrapper";
interface Props {
  params: { univName: string };
}

export default async function UnivRankings({ params }: Props) {
  const univName = decodeURIComponent(params.univName);
  const allUnivs = await UnivService.getAllUnivs();
  const univ = allUnivs.find((u) => u.name === univName);

  if (!univ) return notFound();

  return <ClientWrapper players={univ.players} univName={univ.name} />;
}
