import React from 'react'
import { useTranslation } from 'react-i18next'
import './Description.scss'

const Description = ({name, description, currentLanguage}) => {

    const { t } = useTranslation()

    return (
        <div className='description'>
            <div className='description__text-wrapper'>
                <h2 className='slideOutRight delay04'>{t('Description of')}&#160;<span className='description__headline'>{name}</span></h2>
                <p className='description__info slideOutRight delay08'>{description.text[currentLanguage]}</p>
            </div>
            <div className='description__image-wrapper'>
                <img className='description__image obscuration delay08'src={description.photo} />
                <div className='description__overlay scaling'></div>
            </div>
        </div>
    )
}

export default Description
