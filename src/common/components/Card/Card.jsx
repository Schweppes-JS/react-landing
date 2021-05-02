import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.scss'

const Card = ({info: {shortInfo}, imageAnimationDelay, headerAnimationDelay, addressAnimationDelay}) => {

    const history = useHistory();

    const routeChange = () => {
        history.push(`${history.location.pathname}/${shortInfo.header}`)
    }

    return (
        <div className='card'>
            <h2 className={`card__header slideOutLeft ${headerAnimationDelay}`}>{shortInfo.header}</h2>
            <div className='card__image-container' onClick={routeChange}>
                <img className={`card__image slideOutUp ${imageAnimationDelay}`} src={shortInfo.image}/>
                <div className='card__image-overlay'>
                    <p className='card__status-info'>
                        <span>commissioning date</span>
                        <span>{`${shortInfo.cadence.quater} quater ${shortInfo.cadence.year}`}</span>
                    </p>
                    <p  className='card__status-info'>
                        <span>status</span>
                        <span>{shortInfo.onSale ? 'on sale' : 'expected soon'}</span>
                    </p>
                </div>
            </div>
            <div className={`card__short-info slideOutLeft ${addressAnimationDelay}`}>
                <h3 className='card__architect'>
                    Architects: <br/>
                    <span>{shortInfo.architect}</span>
                </h3>
                <p className='card__address'>{shortInfo.address}</p>
            </div>
        </div>
    )
}

export default Card