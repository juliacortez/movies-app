import styled from 'styled-components'

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr));
    margin: 0 auto;
    justify-items: center;
    column-gap: 5%;
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100vw;


    @media (max-width: 325px) {
        grid-template-columns: repeat(2, auto);
        row-gap: 1.4rem;
        column-gap: 1.8rem;
        margin-top: 8%;
        width: 90%;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        grid-template-columns: repeat(2, minmax(min(10rem, 100%), 1fr));
        row-gap: 1.8rem;
        column-gap: 1.6rem;
        margin-top: 8%;
        margin-left: 25%;
    }

    @media (min-width: 350px) and (max-width: 360px){
        column-gap: 1.2rem;
    }

    @media (min-width: 410px) and (max-width: 450px){
        grid-template-columns: repeat(2, minmax(min(10rem, 100%), 1fr));
        row-gap: 1.8rem;
        column-gap: 2.5rem;
        margin-top: 0 auto;
        width: 80%;
    }
`

export const MovieInfo = styled.div`
    align-items: center;
    text-align: left;
    width: 12rem;
    padding: 1rem;

    @media (min-width: 360px) and (max-width: 400px) {
        padding: 0;
        width: 10rem;
    }

    @media (max-width: 325px) {
        padding: 0;
        width: 8rem;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        width: 11rem;
        padding: 0;
    }
`

export const MoviePoster = styled.img`
    border-radius: 0.2rem;
    cursor: pointer;
    width: 176px;

    @media (min-width: 360px) and (max-width: 400px) {
        width: 156px;
    }

    @media (max-width: 325px) {
        width: 136px;
    }
`

export const MovieTitle = styled.p`
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 400px) {
        line-height: 1.4rem;
        padding-top: 0.2rem;
        padding-bottom: 0.3rem;
    }

    @media (max-width: 325px) {
        font-size: 0.9rem;
        line-height: 1.2rem;
        padding-top: 0.1rem;
        padding-bottom: 0.2rem;
    }
`

export const MovieDate = styled.p`
    font-weight: bold;
    font-size: 0.87rem;
    color: #646464;

    @media (min-width: 360px) and (max-width: 400px) {
        font-size: 0.8rem;
    }
`
