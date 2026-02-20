import { useState, useEffect } from "react";

const KEY = "96a6abfe"; // Using the key you provided

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          // FIXED: We use s=${query} to get a list, NOT i=
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=96a6abfe&s=${query.trim()}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          // If OMDb can't find the movie, it returns Response: "False"
          if (data.Response === "False")
            throw new Error(data.Error || "Movie not found");

          // We set the movies array from data.Search
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      // Only search if the user has typed 3 or more characters
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );

  return { movies, isLoading, error };
}
