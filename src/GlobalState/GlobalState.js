import React, {useState} from 'react'
import { API_KEY } from '../Constants/Key'
import { BASE_URL } from '../Constants/Url'
import useRequestData from '../Hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [choiceGenres, setChoiceGenres] = useState({})

    const [movie, isLoading, error, totalResults] = useRequestData
    (`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${currentPage}`)

    const genre = useRequestData(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-br`)
    const genres = genre[0]

    const data = {
        movie,
        isLoading,
        error,
        genres,
        choiceGenres,
        setChoiceGenres,
        currentPage,
        setCurrentPage,
        totalResults
    }

    return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
    )}
    
export default GlobalState