import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CastDetails from "./CastDetails";
import { useMovieDetails } from "../hooks/useMovieDetails";

function MovieDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useMovieDetails(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movie details.</div>;

  return (
    <>
      <Link to="/home" className="p-10">
        Movies List
      </Link>
      <div className="p-10 flex">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="mb-4 pr-10 max-h-max"
        />
        <div className="justify-center">
          <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
          <p>
            <strong>Release Date:</strong> {data.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {data.overview}
          </p>
          <p>
            <strong>Rating:</strong> {data.vote_average}
          </p>
          <CastDetails />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
