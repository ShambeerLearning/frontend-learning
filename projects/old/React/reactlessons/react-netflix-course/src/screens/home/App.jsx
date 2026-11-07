import { useState, useMemo } from "react";
import MovieCard from "./MovieCard.jsx";
import { MOVIES } from "./movies.data.js";
import { useDebounce } from "../../hooks/useDebounce.js";
import { useTheme } from "../../hooks/useTheme.js";

function App() {
  const { theme, toggleTheme } = useTheme;
  const [searchTern, setSearchTern] = useState("");
  const debouncedSearch = useDebounce(searchTern, 500);

  const movies = useMemo(() => {
    return MOVIES.filter((movie) =>
      movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);
  return (
    <div
      className="min-h-screen w-full bg-white dark:bg-black
            text-black dark:text-white px-6 py-5"
    >
      <header className="mb-10 flex items-center">
        <img
          src="/netflix.jpg"
          alt="Netflix"
          className="h-8 auto height-20 width-20"
        />

        <input
          placeholder="Название фильма"
          type="search"
          value={searchTern}
          onChange={(e) => {
            setSearchTern(e.target.value);
          }}
          className="border border-white/15 px-2 py-1 rounded outline-0"
        />
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 rounded border border-white/20
                    dark:border-white/10 hover:bg-white hover:text-black
                    dark:hover:bg-white/10 transmission"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
              trailerYoutubeId={movie.trailerYouTubeID}
            />
          ))
        ) : (
          <p>Movies not found</p>
        )}
      </main>
    </div>
  );
}

export default App;
