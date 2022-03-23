import styled from 'styled-components'
import { PRIMARY_COLOR } from "../../Constants/Colors";

export const BackgroundContainer = styled.div`
    background-color: ${PRIMARY_COLOR};
    height: auto;
    display: flex;
    margin: auto;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 370px 1fr;
    column-gap: 30px;
    max-width: 80%;
    justify-items: center;
    margin: 0 auto;
    padding-top: 50px;

    .moviePoster{
        width: 370px;
        background: url(img);
        grid-column: 1 / span / 3;
        margin-bottom: 30px;
    }

    img{
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        row-gap: 2.5rem;
        justify-items: center;

        .moviePoster{
            width: 200px;
            margin: 0 auto;
            align-self: 0;
        }
    }

        @media (max-width: 325px) {
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;
            row-gap: 2.5rem;

        .moviePoster{
            width: 200px;
            margin: 0 auto;
            align-self: 1;
        }
    }

    @media (min-width: 410px) and (max-width: 450px){
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;
            row-gap: 2.5rem;

        .moviePoster{
            width: 240px;
            margin: 0 auto;
            align-self: 1;
        }
    }
`

export const DetailsContainer = styled.div`
    height: auto;
    display: grid;
    grid-template-rows: repeat(5, auto);

    @media (min-width: 360px) and (max-width: 400px) {
        margin: -18px;
    }

    @media (max-width: 325px) {
        margin: -5%;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        margin: -5%;
    }
`

export const MovieTitle = styled.p`
    font-weight: 550;
    font-style: normal;
    color: white;
    font-size: 2rem;
    line-height: 2.3rem;
    padding-bottom: 0.6rem;
    letter-spacing: -0.015em;
    max-width: 80%;
    margin-right: 10%;

    @media (min-width: 360px) and (max-width: 400px) {
        font-size: 1.8rem;
        line-height: 2.3rem;
        max-width: 90%;
        letter-spacing: -0.009em;
    }

    @media (max-width: 325px) {
        font-size: 1.7rem;
        line-height: 2.3rem;
        max-width: 90%;
        letter-spacing: -0.009em;
    }

    @media (min-width: 410px) and (max-width: 450px){
        font-size: 1.8rem;
        line-height: 2.3rem;
        max-width: 90%;
        letter-spacing: -0.009em;
    }
`

export const MovieCertificationsAndGenres = styled.div`

    p{
    color: white;
    font-size: 1.0rem;
    line-height: 1.5rem;
    display: inline;
    }

    .separator{
        display: inline;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        display: grid;
        grid-template-rows: repeat(5, auto);
        row-gap: -5px;

        p{
            color: white;
            font-size: 1.0rem;
            line-height: 1.5rem;
        }

        .separator{
            display: none;
        }
    }

    @media (max-width: 325px) {
        display: grid;
        grid-template-rows: repeat(5, auto);
        row-gap: -5px;

        p{
            color: white;
            font-size: 0.9rem;
            line-height: 1.5rem;
        }

        .separator{
            display: none;
        }
    }

    @media (min-width: 410px) and (max-width: 450px) {
        display: grid;
        grid-template-rows: repeat(5, auto);
        row-gap: -5px;

        p{
            color: white;
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .separator{
            display: none;
        }
    }
`

export const Score = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 2rem;

    .circleName{
        font-size: 0.96rem;
        color: white;
        padding-left: 0.8rem;
        line-height: 1.25rem;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 325px) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;

        .circleName{
            font-size: 0.85rem;
        }
    }
    
`
export const Synopsis = styled.div`
    max-width: 65.5rem;

    .overviewTitle{
        font-size: 1.25rem;
        color: white;
        line-height: 1.5rem;
        padding-bottom: 0.4rem;
        font-weight: 510;
    }

    p{
        font-weight: 400;
        font-size: 0.96rem;
        line-height: 1.5rem;
        display: flex;
        align-items: center;
        letter-spacing: -0.005em;
        color: #DDDDDD;
    }

    @media (max-width: 325px) {
        .overviewTitle{
            font-size: 1.1rem;
        }

        p{
            font-size: 0.85rem;
            line-height: 1.3rem;
            letter-spacing: 0.02em;
        }
    }
`

export const CrewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justfify-content: space-between;
    width: 80%;
    row-gap: 2rem;
    column-gap: 3rem;
    margin-top: 2rem;
    background-color: ${PRIMARY_COLOR};

    h5{
        color: white;
        font-size: 0.96rem;
        line-height: 1.5rem;
    }

    p{
        color: white;
        font-weight: 400;
        font-size: 0.87rem;
        line-height: 1.25rem;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.5rem;
        width: 90%;
        margin-bottom: 15%;
    }

    @media (max-width: 325px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.5rem;
        width: 90%;
        margin-bottom: 15%;

        h5{
            font-size: 0.9rem;
        }

        p{
            font-size: 0.8rem;
        }
    }

    @media (min-width: 410px) and (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.5rem;
        width: 90%;
        margin-bottom: 15%;

        h5{
            font-size: 0.9rem;
        }

        p{
            font-size: 0.8rem;
        }
    }
`

export const Skill =  styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    .circle{
        fill: none;
        stroke: #14FF00;
        stroke-width: 5;
        stroke-linecap: round;
        stroke-dasharray: 157;
        stroke-dashoffset: ${(props)=> 157 - 157 * (props.average / 10)};
    }

    .circle:nth-child(1){
        fill: white;
        opacity: 10%;
        stroke-linecap: round;
    }
    
    .svg{
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #number{
        font-weight: 500;
        color: #14FF00;
        position: absolute;
        font-size: 0.9rem;
    }

    @media (max-width: 325px) {
        #number{
            font-size: 0.85rem;
        }
    }
`