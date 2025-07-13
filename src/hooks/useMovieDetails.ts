import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../services/api";

export function useMovieDetails(id: string | undefined) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id!),
    enabled: !!id,
  });
}