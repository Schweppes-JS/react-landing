import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Card.scss'

const Card = ({info: {shortInfo}, imageAnimationDelay, headerAnimationDelay, addressAnimationDelay}) => {

    const { t } = useTranslation()
    const history = useHistory()
    const headerEl = useRef(null)
    const imageEl = useRef(null)
    const shortInfoEl = useRef(null)

    const launchAnimations = (element, animationName) => {
            if (!element.current.classList.contains(animationName)) {
                if (element === imageEl) {
                    if ((window.innerHeight + window.scrollY) > element.current.offsetParent.offsetTop - 20) {
                        element.current.classList.add(animationName)
                    }
                } else {
                    if ((window.innerHeight + window.scrollY) > element.current.offsetTop - 20) {
                        element.current.classList.add(animationName)
                    }
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
                {t(shortInfo.header)}
            </h2>
            <div className='card__image-container' onClick={routeChange} >
                <img className={`card__image ${imageAnimationDelay}`} src={shortInfo.image} ref={imageEl}/>
                <div className='card__image-overlay'>
                    <p className='card__status-info'>
                        <span>{t('commissioning date')}</span>
                        <span>{`${shortInfo.cadence.quater} ${t('quater')} ${shortInfo.cadence.year}`}</span>
                    </p>
                    <p  className='card__status-info'>
                        <span>{t('status')}</span>
                        <span>{shortInfo.onSale ? `${t('on sale')}` : `${t('expected soon')}`}</span>
                    </p>
                </div>
            </div>
            <div className={`card__short-info ${addressAnimationDelay}`} ref={shortInfoEl}>
                <h3 className='card__architect'>
                    {t('Architects')}: <br/>
                    <span>{t(shortInfo.architect)}</span>
                </h3>
                <p className='card__address'>{t(shortInfo.address)}</p>
            </div>
        </div>
    )
}

export default Card