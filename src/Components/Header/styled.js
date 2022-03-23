import styled from 'styled-components'
import { SECONDARY_COLOR } from '../../Constants/Colors'

export const HeaderContainer = styled.div`
    height: 3.5rem;
    background-color: ${SECONDARY_COLOR};
    display: flex;
    align-items: center;
    width: auto;
`

export const Logo = styled.img`
    width: 140px;
    margin-left: 4%;
    cursor: pointer;

    @media (max-width: 400px) {
        margin: 0 auto;
    }

    @media (min-width: 410px) and (max-width: 450px){
        margin: 0 auto;
    }
`