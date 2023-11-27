import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store)=>store.config.lang)

  return (
     (<div className="bg-black">
      <div className="-mt-20 relative z-20 pl-12">
        <MovieList
          title={lang[langKey].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={lang[langKey].popular} movies={movies.popularMovies} />
        <MovieList title={lang[langKey].topRated} movies={movies.topRatedMovies} />
        <MovieList title={lang[langKey].upcoming} movies={movies.upcomingMovies} />
        {/* <MovieList title={"Horror"} movies={nowPlayingMoviesList} /> */}
      </div>
    </div>)
  );
};

export default SecondaryContainer;
