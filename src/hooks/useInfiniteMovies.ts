import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../services/api";
import type { MoviesResponse } from "../types";

export function useInfiniteMovies() {
  return useInfiniteQuery<MoviesResponse, Error>({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }: { pageParam?: number}) => fetchPopularMovies(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });
}