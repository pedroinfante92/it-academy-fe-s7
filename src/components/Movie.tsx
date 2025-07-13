import { Link } from "react-router-dom";
import type { Movie, MovieCardProps } from "../types";



function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card w-60 cursor-pointer hover:scale-105 transition">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
