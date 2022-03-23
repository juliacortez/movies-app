import React from "react"
import ReactPlayer from 'react-player'
import Loading from "../Loading/Loading"
import { Player, TrailerContainer } from "./styled"

const TrailerCard = (props) => {

    const allVideos = props.trailer[0].results

    const trailers = allVideos && allVideos.filter((tr) => {
        return tr.official === true && tr.name.includes("Trailer")
    })

    const trailer = trailers && trailers.slice(0,1).map((tr) => {
        return tr.key
    })

    return(
        <div className="container">
            {trailer ? <>
            {trailer && trailer.length == 0 ? " " : <Player>
        <p>Trailer</p>
        <ReactPlayer controls
        url={`http://www.youtube.com/watch?v=${trailer}`} className="video"/>
        </Player>} </>  : <Loading /> }
        </div>
    )
}

export default TrailerCard