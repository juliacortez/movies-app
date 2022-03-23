import styled from 'styled-components'

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 0 auto;
    width: 85%;
    column-gap: 30px;
    justify-items: center;
    padding-bottom: 20px;

    @media (max-width: 325px) {
        grid-template-columns: repeat(2, auto);
        row-gap: 2rem;
        column-gap: 1.6rem;
        justify-items: center;
        margin-left: 5%;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        grid-template-columns: repeat(2, auto);
        row-gap: 0.3rem;
        column-gap: 1rem;
        margin-top: 5%;
        justify-items: center;
        margin: 0;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        grid-template-columns: repeat(2, auto);
        row-gap: 1.4rem;
        column-gap: 1.6rem;
        justify-items: center;
        margin-left: 3%;
    }
`

export const MovieInfo = styled.div`
    align-items: center;
    text-align: left;
    width: 10.6rem;
    padding: 1rem;

    @media (max-width: 325px) {
        padding: 0;
        width: 8rem;
    }
`

export const MoviePoster = styled.img`
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 325px) {
        width: 136px;
    }
`

export const MovieTitle = styled.p`
    font-weight: bold;
    font-size: 0.9rem;
    padding-top: 0.3rem;
    padding-bottom: 0.4rem;
    cursor: pointer;

    @media (max-width: 325px) {
        font-size: 0.9rem;
        line-height: 1.2rem;
        padding-top: 0.1rem;
        padding-bottom: 0.2rem;
    }
`

export const MovieDate = styled.p`
    font-weight: bold;
    font-size: 0.75rem;
    color: #646464;

    @media (min-width: 360px) and (max-width: 400px) {
        font-size: 0.8rem;
    }
`

export const RecomendationsTitle = styled.p`
font-weight: 850;
font-size: 1.75rem;
margin-left: 8.5%;
margin-bottom: 1.75rem;
margin-top: 1.75rem;

    @media (min-width: 360px) and (max-width: 400px) {
        margin-left: 5%;
        margin-bottom: 1rem;

    }

    @media (max-width: 325px) {
        font-size: 1.55rem;
        margin-left: 5%;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        font-size: 1.55rem;
        margin-left: 3%;
        margin-bottom: 1rem;
    }
`

export const RecomendationsContainer = styled.div`

`