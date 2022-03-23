import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../../Constants/Url'
import { 
    MovieContainer, 
    MovieDate, 
    MovieInfo, 
    MoviePoster, 
    MovieTitle, 
    RecomendationsContainer, 
    RecomendationsTitle 
} from './styled'
import dayjs from 'dayjs'
import "dayjs/locale/pt-br"

const RecomendationsCard = (props) => {

    const movieRecomendations = props.recomendations

    const recomendations = movieRecomendations && movieRecomendations[0].results
    const getMainRecomendations = recomendations && recomendations.slice(0,6)

    const navigate = useNavigate()

    const refreshPage =()=>{
        if(!window.location.hash){
            window.location = window.location + '#'
            window.location.reload();
        }
        
    }

    const movieDate = (date) => {

        const formatedDate = dayjs(date).locale("pt-br").format("DD MMM YYYY").toUpperCase()

        return formatedDate
    }

    const sixMovieRecomendations = getMainRecomendations && getMainRecomendations.map((mv) => {
        return <MovieInfo key={mv.id}>
                        <MoviePoster src={`${IMG_URL}w154${mv.poster_path}`} alt={`${mv.title}`}
                            onClick={() => navigate(`/movie/${mv.id}`)}
                            />
                        <MovieTitle>{mv.title}</MovieTitle>
                        <MovieDate>{movieDate(mv.release_date)}</MovieDate>
                    </MovieInfo>
    })

    return(
        <RecomendationsContainer>
            {sixMovieRecomendations && sixMovieRecomendations.length === 0 ? 
            "" : <><RecomendationsTitle>Recomendações</RecomendationsTitle>
            <MovieContainer>
            {sixMovieRecomendations}
            </MovieContainer> </>}
        </RecomendationsContainer>
    )
}

export default RecomendationsCard