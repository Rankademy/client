import Podium from "./Podium";
import Header from "./global/Header";
import Rankings from "./Rankings";
import { mockData } from "./data/mock-ranking";

export default function Page() {
  // mockData.data에 접근하여 배열 가져오기
  const allData = [...mockData.data];
  return (
    <>
      <Header />
      <Podium data={allData} />
      <Rankings data={allData} />
    </>
  );
}
