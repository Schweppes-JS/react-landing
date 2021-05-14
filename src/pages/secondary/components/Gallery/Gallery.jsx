import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PhotoSlider from '../PhotoSlider/PhotoSlider'
import DateSlider from '../DateSlider/DateSlider'
import './Gallery.scss'

const Gallery = ({gallery}) => {

    const { t } = useTranslation()
    const [currentDateGroup, setCurrentDateGroup] = useState(Object.keys(gallery.dates[0])[0])

    return (
        <div className='gallery'>
            <h2 className='gallery__headline'>{t(`${gallery.headline}`)}</h2>
            <div className='gallery__date-slider'>
                <DateSlider gallery={gallery} currentDateGroup={currentDateGroup} setCurrentDateGroup={setCurrentDateGroup}/>
            </div>
            <div className='gallery__image-slider'>
                <PhotoSlider dates={gallery.dates} currentDateGroup={currentDateGroup}/>
            </div>
        </div>
    )
}

export default Gallery
