import styled from 'styled-components'
import { BACKGROUND_COLOR } from '../../Constants/Colors'

export const DetailsContainer = styled.div`
    margin: auto;
    background-color: ${BACKGROUND_COLOR};

    @media (min-width: 360px) and (max-width: 400px) {
        margin: 0;
    }

    @media (max-width: 325px){
        margin: 0;
    }
`