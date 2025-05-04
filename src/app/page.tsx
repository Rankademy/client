// src/app/page.tsx
import Podium from "./components/main/Podium";
import Header from "./components/global/Header";
import Rankings from "./components/main/Rankings";
import { mockData } from "./data/mock-ranking";

export default function Page() {
  const allData = [...mockData];
  return (
    <>
      <Header />
      <Podium data={allData} />
      <Rankings data={allData} />
    </>
  );
}
