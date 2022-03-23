import styled from 'styled-components'

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 329px;
    margin: auto;
    max-width: 75vw;
    flex-wrap: wrap;
    
    @media (max-width: 325px) {
        justify-content: flex-start;
        margin-left: 3%;
        width: 100%;
        padding-bottom: 5%;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        justify-content: flex-start;
        margin-left: 3%;
        width: 100%;
        padding-bottom: 5%;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        justify-content: flex-start;
        margin-left: 3%;
        width: 100%;
        padding-bottom: 5%;
    }
`

export const FiltersBox = styled.p`
    background-color: ${(props)=> props.choice ? "orange" : "white"};
    color: #323232;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.2rem;
    cursor: pointer;
    text-align: center;
    line-height: 0.3rem;
    padding: 16px;
    position: static;
    margin-bottom: 0.4rem;

    @media (max-width: 325px) {
        font-size: 0.8rem;
        margin: 0.2rem;
        padding: 12px 12px;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        font-size: 0.87rem;
        margin: 0.2rem;
        padding: 16px 12px;
    }

    @media (min-width: 410px) and (max-width: 450px) {
        font-size: 0.9rem;
        margin: 0.2rem;
        padding: 18px 14px;
    }
`