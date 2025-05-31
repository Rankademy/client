"use client";

import { useState, useEffect } from "react";
import type { Univ } from "@/app/data/mockSchoolData";
import { UnivService as UnivService } from "@/app/services/UnivService";

export function useUnivData(univId: string | null) {
  const [univ, setUniv] = useState<Univ | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!univId) {
      setUniv(null);
      setLoading(false);
      return;
    }

    const fetchUniv = async () => {
      try {
        setLoading(true);
        setError(null);
        const univData = await UnivService.getUnivById(univId);
        setUniv(univData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch univ data"
        );
        setUniv(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUniv();
  }, [univId]);

  return { univ, loading, error };
}
