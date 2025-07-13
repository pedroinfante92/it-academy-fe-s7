import MovieCard from "./Movie";
import { useInfiniteMovies } from "../hooks/useInfiniteMovies";
import type { Movie } from "../types";

function Home() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteMovies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies.</div>;

  const movies: Movie[] = data.pages.flatMap((page) => page.results);

  return (
    <div className="movies-grid flex flex-wrap gap-8 p-10 justify-center">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      {hasNextPage && (
        <div className="">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="text-white rounded"
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
