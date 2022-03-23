import styled from 'styled-components'

export const TrailerContainer = styled.div`

`
export const Player = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 20px;
    max-width: 100%;

    .video{
        margin-left: 8.5%;
    }

    p{
        font-weight: 850;
        font-size: 1.75rem;
        margin-left: 8.5%;
        margin-bottom: 1.75rem;
    }

    @media (min-width: 360px) and (max-width: 400px) {
        margin-left: -5%;

        .video{
            max-width: 90%;
        }

        p{
            font-size: 1.75rem;
        }
    }

    @media (max-width: 325px) {
        margin: -5%;

        .video{
            max-width: 90%;
        }

        p{
            font-size: 1.55rem;
            margin-bottom: 1.45rem;
        }
    }

    @media (min-width: 410px) and (max-width: 450px) {
        margin: -5%;

        .video{
            max-width: 90%;
        }

        p{
            font-size: 1.55rem;
            margin-bottom: 1.45rem;
        }
    }
`