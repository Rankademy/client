import Podium from "./components/Podium";
import Header from "./components/global/Header";
import Rankings from "./components/Rankings";
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
