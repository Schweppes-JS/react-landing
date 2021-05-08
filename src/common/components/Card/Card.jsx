import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import './Card.scss'

const Card = ({info: {shortInfo}, imageAnimationDelay, headerAnimationDelay, addressAnimationDelay}) => {

    const history = useHistory()
    const headerEl = useRef(null)
    const imageEl = useRef(null)
    const shortInfoEl = useRef(null)

    const launchAnimations = (element, animationName) => {
            if (!element.current.classList.contains(animationName)) {
                if ((window.innerHeight + window.scrollY) > element.current.offsetTop - 20) {
                    element.current.classList.add(animationName)
                }
            }
    }

    const onScroll = () => {
        launchAnimations(headerEl, 'slideOutLeft')
        launchAnimations(imageEl, 'slideOutUp')
        launchAnimations(shortInfoEl, 'slideOutLeft')
    }

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const routeChange = () => {
        history.push(`${history.location.pathname}/${shortInfo.header}`)
    }

    return (
        <div className='card'>
            <h2 className={`card__header ${headerAnimationDelay}`} ref={headerEl}>
                {shortInfo.header}
            </h2>
            <div className={`card__image-container ${imageAnimationDelay}`} onClick={routeChange} ref={imageEl}>
                <img className={'card__image'} src={shortInfo.image}/>
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
            <div className={`card__short-info ${addressAnimationDelay}`} ref={shortInfoEl}>
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