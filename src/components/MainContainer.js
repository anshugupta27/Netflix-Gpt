import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!moviesList ) return;
  const mainMovie = moviesList[0];
  const {id, original_title, overview} = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBackground movieId ={id}/>
    </div>
  );
};

export default MainContainer;
