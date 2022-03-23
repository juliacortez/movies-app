import React from 'react'
import { IMG_URL } from '../../Constants/Url'
import { 
    CastBackground, 
    CastContainer, 
    CharacterContainer, 
} from './styled'

const CastCard = (props) => {

    const fullCast = props.cast[0].cast

    const cast = fullCast && fullCast.slice(0, 15)

    const actors = cast && cast.map((cs) => {
        return <CharacterContainer key={cs.id}>
            <div className='castPicture'>
                <img src={`${IMG_URL}w185${cs.profile_path}`} alt={cs.name}/>
            </div>
                <p className="name">{cs.name}</p>
                <p>{cs.character}</p>
        </CharacterContainer>
    })
    
    return(
            <CastBackground>
                <p className="castTitle">Elenco original</p>
                <CastContainer>
                    {actors}
                </CastContainer>
            </CastBackground>
    )
}

export default CastCard