import type { CastCardProps } from "../types";

function CastCard({ cast }: CastCardProps) {
  return (
    <div className="w-30 cursor-pointer hover:scale-105 transition">
      <div>
        {cast.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
        ) : (
          <div className="w-30 h-45 bg-gray-700 flex items-center justify-center text-white">
            No Image
          </div>
        )}
      </div>
      <div className="movie-info">
        <h3>{cast.name}</h3>
        <p>{cast.character}</p>
      </div>
    </div>
  );
}

export default CastCard;
