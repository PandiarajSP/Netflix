import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ imgPath, movieTitle }: { imgPath: string, movieTitle: string }) => {
  const imageURL = IMG_CDN_URL + "/" + imgPath;
  return (
    <div className="w-48 pr-4">
      <img alt={movieTitle} src={imageURL} />
    </div>
  );
};

export default MovieCard;
