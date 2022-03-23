import styled from 'styled-components'


export const CastBackground = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 40px;

        .castTitle{
            font-weight: 850;
            font-size: 1.75rem;
            margin-left: 8.5%;
            margin-bottom: 1.75rem;
            margin-top: 1.75rem;
        }

        @media (max-width: 325px) {
            margin-left: -18px;

            .castTitle{
                font-size: 1.55rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        }

        @media (min-width: 360px) and (max-width: 400px) {
            margin-left: -18px;
        }

        @media (min-width: 410px) and (max-width: 450px) {
            margin-left: -18px; 

            .castTitle{
            font-weight: 850;
            font-size: 1.75rem;
            margin-left: 8.5%;
            margin-bottom: 1.75rem;
            margin-top: 1.75rem;
        }
    }
`
export const CastContainer = styled.div`
    display: grid;
    margin: 0 auto;
    margin-left: 8.5%;
    grid-template-columns: repeat(15, 1fr);
    column-gap: 12px;
    width: 85%;
    overlow: hidden;
    overflow-x: scroll;
    border-radius: 4px;
    
    ::-webkit-scrollbar{
        height: 10px;
        padding-top: 2rem;
    }

    ::-webkit-scrollbar-track{
        background-color: #BDBDBD;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #ADADAD;
        border-radius: 10px;
    }

    
`

export const CharacterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    width: 181px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 1.8rem;

    .name{
        padding-top: 0.8rem;
        font-size: 1rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        line-height: 1.3rem;
    }

    p{
        font-size: 0.9rem;
        padding-top: 0.4rem;
        padding-bottom: 0.5rem;
    }

    .castPicture{
        background: url(img);
        width: 165px;
        height: 222px;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 4px;
        }

    }

    @media (max-width: 325px) {
        width: 161px;

        .castPicture{
            background: url(img);
            width: 145px;
            height: 202px;
    }

    .name{
        font-size: 0.9rem;
    }

    p{
        font-size: 0.8rem;
        padding-top: 0.3rem;
        padding-bottom: 0.4rem;
    }
`

