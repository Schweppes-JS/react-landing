import React, { useEffect, useState } from 'react'
import PhotoSlider from '../PhotoSlider/PhotoSlider'
import DateSlider from '../DateSlider/DateSlider'
import './Gallery.scss'
import { useSelector } from 'react-redux'

const Gallery = ({gallery}) => {

    const currentLanguage = useSelector(state => state.primaryPage.language)
    const [currentDateGroup, setCurrentDateGroup] = useState(gallery.dates[0].date[currentLanguage])
    const [currentDateGroupIndex, setCurrentDateGroupIndex] = useState(0)

    useEffect(() => {
        setCurrentDateGroup(gallery.dates[currentDateGroupIndex].date[currentLanguage])
    }, [currentLanguage])


    return (
        <div className='gallery'>
            <h2 className='gallery__headline'>{gallery.headline[currentLanguage]}</h2>
            <div className='gallery__date-slider'>
                <DateSlider
                    gallery={gallery}
                    currentLanguage={currentLanguage}
                    currentDateGroup={currentDateGroup}
                    setCurrentDateGroup={setCurrentDateGroup}
                    setCurrentDateGroupIndex={setCurrentDateGroupIndex}
                />
            </div>
            {<div className='gallery__image-slider'>
                {currentDateGroup === gallery.dates[currentDateGroupIndex].date[currentLanguage] && <PhotoSlider
                    dates={gallery.dates}
                    currentDateGroup={currentDateGroup}
                    currentLanguage={currentLanguage}
                />}
            </div>}
        </div>
    )
}

export default Gallery
