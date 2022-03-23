import styled from 'styled-components'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../../Constants/Colors'

export const BackgroundContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 80vw;

    @media (max-width: 325px){
        margin: 0;
    }

    @media (min-width: 360px) and (max-width: 400px){
        margin: 0;
    }

    @media (min-width: 410px) and (max-width: 450px){
        margin: 0;
    }

`
export const HomeContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: ${BACKGROUND_COLOR};
`

export const TitleBackground = styled.div`
    background-color: ${PRIMARY_COLOR};
    height: auto;
    padding-bottom: 5%;
`

export const TitleContainer = styled.p`
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    padding-top: 5.3rem;
    letter-spacing: -0.008em;
    font-style: normal;
    letter: -0.5%;
    max-width: 60%;
    margin: 0 auto;

    @media (min-width: 360px) and (max-width: 400px)  {
        text-align: left;
        padding-top: 2.5rem;
        font-size: 1.7rem;
        margin-left: 1rem;
        max-width: 85%;
    }

    @media (max-width: 325px){
        text-align: left;
        padding-top: 2.5rem;
        font-size: 1.5rem;
        margin-left: 1rem;
        max-width: 85%;
    }

    @media (min-width: 410px) and (max-width: 450px){
        text-align: left;
        padding-top: 4rem;
        font-size: 2.3rem;
        margin-left: 1rem;
        max-width: 85%;
    }
`

export const SubtitleContainer = styled.p`
    color: white;
    text-align: center;
    font-size: 1rem;
    padding-top: 2.8rem;
    padding-bottom: 1rem;
    font-weight: 550;

    @media (min-width: 360px) and (max-width: 400px)  {
        text-align: left;
        padding-top: 2.25rem;
        font-size: 0.87rem;
        margin-left: 1rem;
        max-width: 80%;
    }

    @media (max-width: 325px){
        text-align: left;
        padding-top: 2.25rem;
        font-size: 0.87rem;
        margin-left: 1rem;
    }

    @media (min-width: 410px) and (max-width: 450px){
        text-align: left;
        padding-top: 2.8rem;
        font-size: 1rem;
        margin-left: 1rem;
    }

`