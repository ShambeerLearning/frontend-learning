import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MOVIES } from "../home/movies.data";

const LazyMovieComments = lazy(() =>
  import("./MovieComments").then((c) => ({ default: c.MovieComments }))
);

export function MovieDetails() {
  const { id } = useParams();
  const movie = useMemo(() => {
    return MOVIES.find((movie) => movie.trailerYouTubeID === id);
  }, [id]);
  if (!movie)
    return <p className="text-center mt-10 text-gray-400">Movie not found</p>;
  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={image}
          alt="Movie Poster"
          className="w-full h-auto object-cover"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{movie.name}</h1>
          <p className="text-sm text-gray-400">IMDb: {movie.rating}</p>

          <p className="text-gray-300 text-sm">
            Это краткое описание фильма и бла бла бла
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMovieComments />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
