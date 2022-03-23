import {  useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [totalResults, setTotalResults] = useState(0)
    

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
            .then((res) => {
                setIsLoading(false)
                setData(res.data)
                setTotalResults(res.data.total_results)
    })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
    })
    }, [url])
    
    return [data, isLoading, error, totalResults]

    }

export default useRequestData