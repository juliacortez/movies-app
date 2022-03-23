import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../../Constants/Url'
import GlobalStateContext from '../../GlobalState/GlobalStateContext'
import { 
    MovieContainer, 
    MovieDate, 
    MovieInfo, 
    MoviePoster, 
    MovieTitle 
} from './styled'
import dayjs from 'dayjs'
import "dayjs/locale/pt-br"

const MovieCard = () => {

    const { movie, choiceGenres } = useContext(GlobalStateContext)

    const movies = movie.results

    const filteredMovies = movies && Object.keys(choiceGenres).length ? movies.filter((mov) => {
        const genresId = mov.genre_ids
        for (const id of genresId) {
            if(choiceGenres[id]){
                return true
            }
        }
        return false
    }) : movies

    const movieDate = (date) => {

        const formatedDate = dayjs(date).locale("pt-br").format("DD MMM YYYY").toUpperCase()

        return formatedDate
    }

    const navigate = useNavigate()

    const moviesList = filteredMovies && filteredMovies.map((movie) => {
        return (
            <MovieInfo key={movie.id}>
                <MoviePoster src={`${IMG_URL}original${movie.poster_path}`}  alt={`${movie.title}`}
                onClick={() => navigate(`/movie/${movie.id}`)}/>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieDate>{movieDate(movie.release_date)}</MovieDate>
            </MovieInfo>
        )})
    

    return (
        <MovieContainer>
            {moviesList}
        </MovieContainer>
    )
}

export default MovieCard