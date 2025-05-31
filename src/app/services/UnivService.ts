import type { Univ } from "@/app/data/mockSchoolData";
import { mockUnivData } from "@/app/data/mockSchoolData";

export class UnivService {
  private static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static async getUnivById(univId: string): Promise<Univ | null> {
    await this.delay(500);
    const univ = mockUnivData[univId];
    return univ || null;
  }

  static async getAllUnivs(): Promise<Univ[]> {
    await this.delay(300);
    return Object.values(mockUnivData);
  }

  static async getUnivNames(): Promise<{ id: string; name: string }[]> {
    await this.delay(200);
    return Object.values(mockUnivData).map((univ) => ({
      id: univ.id,
      name: univ.name,
    }));
  }

  static async searchUnivs(query: string): Promise<Univ[]> {
    await this.delay(300);
    return Object.values(mockUnivData).filter((univ) =>
      univ.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
