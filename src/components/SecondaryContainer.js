import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
     (<div className="bg-black">
      <div className="-mt-20 relative z-20 pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        {/* <MovieList title={"Horror"} movies={nowPlayingMoviesList} /> */}
      </div>
    </div>)
  );
};

export default SecondaryContainer;
