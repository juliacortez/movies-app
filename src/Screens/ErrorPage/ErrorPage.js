import React from "react";
import ERROR from '../../Resources/ERROR.svg'
import { Image } from "./styled";

const ErrorPage = () => {

    document.title = "The Movies Database"

    return(
        <Image>
            <img src={ERROR} alt="Ocorreu um erro" />
            <h3>Ocorreu um erro. Tente novamente</h3>
        </Image>
    )
}

export default ErrorPage