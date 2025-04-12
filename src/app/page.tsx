// src/app/page.tsx
import Rankings from "./components/Rankings";
import { mockData } from "./data/mock-ranking";

export default function Page() {
  const allData = [...mockData]; // 합쳐서 하나의 리스트로 넘김

  return <Rankings data={allData} />;
}
