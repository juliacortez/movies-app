import { HeaderContainer, Logo } from "./styled"
import React from 'react'
import logo from '../../Resources/logo.png'

const Header = () => {

    const goToHome = () => {
        window.location = "/"
    }

    return (
        <HeaderContainer>
                <Logo src={logo} alt="The Movie Database Logo" onClick={goToHome}/>
        </HeaderContainer>
    )
}

export default Header