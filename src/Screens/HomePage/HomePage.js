import React, { useContext } from "react"
import FiltersOptions from "../../Components/Filters/Filters"
import Loading from "../../Components/Loading/Loading"
import MovieCard from "../../Components/MovieCard/MovieCard"
import AddPagination from "../../Components/Pagination/Pagination"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import ErrorPage from "../ErrorPage/ErrorPage"
import { BackgroundContainer, HomeContainer, SubtitleContainer, TitleBackground, TitleContainer } from "./styled"

const HomePage = () => {

    const { movie, isLoading, error } = useContext(GlobalStateContext)

    document.title = "The Movies Database"

    return (
        <>
            <HomeContainer>
                <TitleBackground>
                    <TitleContainer>
                        Milhões de filmes, séries e pessoas para descobrir. Explore já.
                    </TitleContainer>
                    <SubtitleContainer>
                        FILTRE POR:
                    </SubtitleContainer>
                    <FiltersOptions />
                </TitleBackground>
            </HomeContainer>
            {isLoading && <Loading />}
            {!isLoading && error && <ErrorPage />}
            {!isLoading && !error && movie && 
                <>
                <BackgroundContainer> 
                    <MovieCard /> 
                </BackgroundContainer>
                <AddPagination />
                </>}
        </>
    )
}

export default HomePage