import styled from "styled-components";
import { BACKGROUND_COLOR } from "../../Constants/Colors";

export const Image = styled.div`
    display: block;
    margin: 0px auto;
    text-align : center;
    background-color: ${BACKGROUND_COLOR};
    height: 100vh;

    img{
    width: 500px;
    }

        h3{
            color: #323232;
            font-weight: bold;
            font-size: 2rem;
        }
    }
`