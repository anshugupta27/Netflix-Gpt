import React, {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice'


const useNowPlayingMovies = () => {
    const nowPlayingMoviesList = useSelector(state => state.movies);
    const dispatch = useDispatch();
   
     const getNowPlayingMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
       dispatch(addNowPlayingMovies(json.results))
     }
     useEffect (() => {
       getNowPlayingMovies();
     },[])

}

export default useNowPlayingMovies