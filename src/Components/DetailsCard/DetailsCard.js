import React from "react"
import { IMG_URL } from "../../Constants/Url"
import dayjs from 'dayjs'
import { 
    BackgroundContainer, 
    CrewContainer, 
    DetailsContainer, 
    Grid, 
    MovieCertificationsAndGenres, 
    MovieTitle, 
    Score, 
    Skill, 
    Synopsis 
} from "./styled"


const DetailsCard = (props) => {


    const movieDetails = props.details && props.details[0]
    const movieArray = [movieDetails]

    const movieYear = (date) => {

        const getYear = dayjs(date).format("YYYY")

        return getYear
    }
    
    const certification = props.certification && props.certification[0].results

    const getBRItem = certification && certification.find(item => item.iso_3166_1 === "BR")

    const age = (getBRItem) => {

        const brAge = getBRItem && getBRItem.release_dates[0].certification

            if(brAge === "L"){
                return "L"
            }
            else if(brAge === undefined){
                return "Não informado"
            }
            else if(brAge === ''){
                return "Não informado"
            }
            else {
                return brAge + ' ' + 'anos'
            }
    }

    const movieDate = (getBRItem) => {

        const releasedDate = getBRItem && getBRItem.release_dates[0].release_date

        const getDate = releasedDate && releasedDate
            if(getBRItem === undefined) {
                return "Não informado"
        }
        else{
            const releaseDate = dayjs(getDate).add(1, 'd').format('DD/MM/YYYY') + " " + "(BR)"
            return releaseDate
        }

    }

    const genArray = movieArray[0].genres && movieArray[0].genres.map
        ((gen => {
            return gen.name
        }
    ))

    const allGenres = genArray && genArray.join(', ')

    const movieRuntime = (time) => {

        const hours = Math.floor(time / 60)
        const minutes = time % 60

        if(hours >= 1) {
            return hours + "h" + " " + minutes + "m"
        }
        else if(hours == 0){
            return minutes + "m"
        }
        else{
            return "Não informado"
        }
    }

    const getCrew = props.credits[0].crew

    const findDirector = getCrew && getCrew.filter((dr) => {
        const find = dr.department === "Directing" && dr.job === "Director"
        return find
    })
        
    const director = findDirector && findDirector.map((dir) => {
        return <div key={dir.id}>
                    <h5>{dir.name}</h5>
                    <p>Director</p>
                </div>
    })

    const findCharactersResponsable = getCrew && getCrew.filter((ch) => {
        const responsable = ch.department === "Writing" && ch.job === "Characters"
        return responsable
    })

    const charactersResponsable = findCharactersResponsable && findCharactersResponsable.map((char) => {
        return <div key={char.id}>
                <h5>{char.name}</h5>
                <p>Characters</p>
        </div>
    })

    const findWriters = getCrew && getCrew.filter((wr) => {
        if(wr.department === "Writing" && wr.job === "Writer"){
            return wr.department === "Writing" && wr.job === "Writer"
        }else if(wr.department === "Writing" && wr.job === "Screenplay"){
            return wr.department === "Writing" && wr.job === "Screenplay"
    }
    })

    const writers = findWriters && findWriters.map((wri) => {
        return <div key={wri.id}>
            <h5>{wri.name}</h5>
            <p>Screenplay</p>
        </div>
    })

    const movie = movieArray && movieArray.map((mv) => {
        return (
            <>
            <div key={mv.id}>
                <BackgroundContainer>
                    <Grid>
                        <div className="moviePoster">
                            <img src={`${IMG_URL}original${mv.poster_path}`} alt={`${mv.title}`} />
                        </div>
                        <DetailsContainer>
                            <div>
                                <MovieTitle>{mv ? <>{mv.title} ({movieYear(mv.release_date)})</> : ""}</MovieTitle>
                                <MovieCertificationsAndGenres>
                                    <p>{age(getBRItem)}</p>  <p className="separator">{" "} • {" "}</p>
                                    <p>{movieDate(getBRItem)}</p> <p className="separator">{" "} • {" "}</p>
                                    <p>{allGenres}</p> <p className="separator">{" "} • {" "}</p>
                                    <p>{movieRuntime(mv.runtime)}</p>
                                    </MovieCertificationsAndGenres>
                                <Score>
                                    <Skill average={mv.vote_average}>
                                        <svg height="60" width="60">
                                            <circle cx="30" cy="30" r="25"  className="circle" />
                                            <circle cx="30" cy="30" r="25" className="circle" />
                                        </svg>
                                        <div id="number"><p>{mv.vote_average * 10}%</p></div>
                                    </Skill>
                                    <div className="circleName">Avaliação dos<br />usuários</div>
                                </Score>
                                <Synopsis>
                                    <p className="overviewTitle">Sinopse</p>
                                    <p>{mv.overview ? mv.overview : "Não informado"}</p>
                                </Synopsis>
                                <CrewContainer>
                                    {charactersResponsable}
                                    {director}
                                    {writers}
                                </CrewContainer>
                            </div>
                        </DetailsContainer>
                    </Grid>
                </BackgroundContainer>
            </div>
            </>
        )
    })


    return(
        <div>
            {movie}
        </div>
    )
}

export default DetailsCard