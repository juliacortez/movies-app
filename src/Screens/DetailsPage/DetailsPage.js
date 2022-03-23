import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { API_KEY } from "../../Constants/Key"
import { BASE_URL } from "../../Constants/Url"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import useRequestData from "../../Hooks/useRequestData"
import Loading from "../../Components/Loading/Loading"
import DetailsCard from "../../Components/DetailsCard/DetailsCard"
import CastCard from "../../Components/CastCard/CastCard"
import { DetailsContainer } from "./styled"
import TrailerCard from "../../Components/TrailerCard/TrailerCard"
import RecomendationsCard from "../../Components/RecomendationsCard/RecomendationsCard"
import ErrorPage from "../ErrorPage/ErrorPage"


const DetailsPage = () => {

    const {id} = useParams()

    const {isLoading, error} = useContext(GlobalStateContext)

    const getDetails = useRequestData
        (`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)

    const getCertifications = useRequestData
        (`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`)

    const getCredits = useRequestData
        (`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`)

    const getTrailer = useRequestData
        (`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)

    const getRecomendations = useRequestData
        (`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=pt-BR`)

    window.scrollTo(0, 0)   

    const getName = getDetails[0] 
    const movies = [getName] 
    const movieTitle = movies && movies.map((mv) => {
        return mv.title
    })

    document.title = movieTitle

    return (
        <DetailsContainer>
            {isLoading && <Loading />}
            {!isLoading && error && <ErrorPage />}
            {!isLoading && !error &&
                    <>
                        <DetailsCard 
                            details={getDetails} 
                            certification={getCertifications}
                            credits={getCredits}
                        /> 
                        <CastCard 
                            cast={getCredits}
                        />
                        <TrailerCard 
                            trailer={getTrailer}
                        />
                        <RecomendationsCard 
                            recomendations={getRecomendations}
                        />
                        </>
            }
        </DetailsContainer>
    )
}

export default DetailsPage