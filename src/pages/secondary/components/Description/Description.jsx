import React from 'react'
import { useTranslation } from 'react-i18next'
import './Description.scss'

const Description = ({name, image, info }) => {

    const { t } = useTranslation()

    return (
        <div className='description'>
            <div className='description__text-wrapper'>
                <h2>{t('Description of')}&#160;<span className='description__headline'>{t(name)}</span></h2>
                <p>{info}</p>
            </div>
            <div className='description__image-wrapper'>
                <img className='description__image'src={image} />
            </div>
        </div>
    )
}

export default Description
