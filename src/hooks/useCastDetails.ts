import { useQuery } from "@tanstack/react-query";
import { fetchCastDetails } from "../services/api";

export function useCastDetails(id: string | undefined) {
  return useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchCastDetails(id!),
    enabled: !!id,
  });
}