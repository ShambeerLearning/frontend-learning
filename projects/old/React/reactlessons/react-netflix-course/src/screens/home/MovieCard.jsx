import { memo, use, useCallback, useState } from "react";
import FavoriteButton from "./FavoriteButton.jsx";
import { Modal } from "../../components/ui/Modal.jsx";
import { Link } from "react-router-dom";

function MovieCard({ image, rating, trailerYoutubeId }) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const openTrailer = useCallback(() => {
    setIsOpenTrailer(true);
  });

  return (
    <div
      className="relative w- [200px] rounded 2xl overflow-hidden bg-neutral-900 shadow-lg hover:scale-105 transition-transform will-change-transform duration-300"
      onClick={() => {
        setIsOpenTrailer(true);
      }}
    >
      {isOpenTrailer && (
        <Modal
          onClose={() => {
            setIsOpenTrailer(false);
          }}
        >
          <iframe
            width="373"
            height="210"
            src={`https://www.youtube.com/embed/${trailerYoutubeId}?amp;controls=0`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal>
      )}

      <img
        src={image}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient from-black/80 to-transparent p-2 text-sm text-white font-semibold">
        IMDb: {rating}
      </div>
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton />
        <button className="btn" onClick={openTrailer}>
          Трейлер
        </button>
        <Link to={`movie/${trailerYoutubeId}`}>MovieLink</Link>
      </div>
    </div>
  );
}

export default memo(MovieCard);
