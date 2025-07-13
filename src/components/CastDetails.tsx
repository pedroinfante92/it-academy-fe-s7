import { useParams } from "react-router-dom";
import CastCard from "./Cast";
import { useCastDetails } from "../hooks/useCastDetails";

function CastDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useCastDetails(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading cast details.</div>;

  return (
    <div className="flex flex-wrap gap-6 p-10 justify-center">
      {data.cast.map((castMember:any ) => (
        <CastCard cast={castMember} key={castMember.id} />
      ))}
    </div>
  );
}

export default CastDetails;
