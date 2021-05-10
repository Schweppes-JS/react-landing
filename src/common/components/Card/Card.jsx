import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { launchAnimations, rollbackAnimation } from '../../../pages/primary/services/animationServices'
import './Card.scss'

const Card = ({info: {shortInfo}, imageAnimationDelay, headerAnimationDelay, addressAnimationDelay}) => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const history = useHistory()
    const cardEl = useRef(null)
    const headerEl = useRef(null)
    const imageEl = useRef(null)
    const shortInfoEl = useRef(null)

    const onScroll = () => {
        headerEl.current && launchAnimations(headerEl.current, 'slideOutLeft')
        imageEl.current && launchAnimations(imageEl.current, 'slideOutUp')
        shortInfoEl.current && launchAnimations(shortInfoEl.current, 'slideOutLeft')
    }

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onCardClick = () => {
        const cards = Array.from(cardEl.current.parentElement.children)
        cards.forEach(card => {
            for ( let i = 0; i < card.children.length; i++) {
                if (i === 0) {
                    rollbackAnimation(card.children[i], 'slideBackRight')
                } else if (i === 1) {
                    rollbackAnimation(card.children[i].children[1], 'slideDown')
                    rollbackAnimation(card.children[i].children[0], 'slideBackDown')
                } else {
                    rollbackAnimation(card.children[i], 'slideBackRight')
                }
            }
        })
        setTimeout(() => {
            const pageUrl = t(shortInfo.header.toLowerCase().replaceAll(' ', '-'))
            history.push(`${history.location.pathname}/${pageUrl}`)
        }, 1600)
    }

    return (
        <div className='card' ref={cardEl}>
            <h2 className={`card__header ${headerAnimationDelay}`} ref={headerEl}>
                {t(shortInfo.header)}
            </h2>
                <div className='card__image-wrapper' onClick={onCardClick}>
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