import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {
    const movieResults = useSelector((store) => store.gpt.movieResults);
    const movieNames = useSelector((store) => store.gpt.movieNames);
  return (
    <div>GptMovieSuggestion</div>
  )
}
export default GptMovieSuggestion