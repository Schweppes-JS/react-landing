import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

const DateSlider = ({gallery, currentDateGroup, setCurrentDateGroup, currentLanguage, setCurrentDateGroupIndex}) => {
    
    let slider;
    const [isVisibleNextArrow, setVisibilityNextArrow] = useState(false)
    const [isVisiblePrevArrow, setVisibilityPrevArrow] = useState(false)
    const [isCanClick, setCanClick] = useState(true)

    useEffect(() => {
        gallery.dates.length > 10 && setVisibilityNextArrow(true)
    }, [])

    const settings = {
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
    };

    const onNextClick = () => {
        isCanClick && gallery.dates.find((object, index, array) => {
            setCanClick(false)
            if (object.date[currentLanguage] === currentDateGroup) {
                if (index < array.length - 2) {
                    setCurrentDateGroup(array[index+1].date[currentLanguage])
                    setCurrentDateGroupIndex(index+1)
                    setVisibilityPrevArrow(true)
                } else {
                    setVisibilityNextArrow(false)
                }
                setTimeout(() => setCanClick(true), 1000)
                slider.slickNext()
                return true;
            }
        })
    }

    const onPrevClick = () => {
        isCanClick && gallery.dates.find((object, index, array) => {
            setCanClick(false)
            if (object.date[currentLanguage] === currentDateGroup) {
                if (index > 0) {
                    setCurrentDateGroup(array[index-1].date[currentLanguage])
                    setCurrentDateGroupIndex(index-1)
                }
                if (index === 1) {
                    setVisibilityPrevArrow(false)
                }
                setTimeout(setCanClick(true), 500)
                slider.slickPrev()
                return true;
            }
        })
    }

    const onTabClick = (date) => {
        gallery.dates.find((object, index) => {
            if (object.date[currentLanguage] === date) {
                if ( gallery.dates.length > 10) {
                    if (index > 0) {
                        setVisibilityPrevArrow(true)
                        setVisibilityNextArrow(true)
                    } 
                    if (index === 0) {
                        setVisibilityPrevArrow(false)
                    } 
                    if (index === gallery.dates.length - 1) {
                        setVisibilityNextArrow(false)
                    }
                }
                setCurrentDateGroupIndex(index)
                return true
            }
        })
        setCurrentDateGroup(date)
    }

    return (
        <>
            <Slider ref={c => (slider = c)} {...settings}>
                {gallery.dates.map(object => 
                    <p className='date-slider__date' key={object.date[currentLanguage]} onClick={() => onTabClick(object.date[currentLanguage])}>
                        {object.date[currentLanguage]}
                    </p>)}
            </Slider>
            {isVisibleNextArrow && <button className='custom-button slick-next' onClick={onNextClick}></button>}
            {isVisiblePrevArrow && <button className='custom-button slick-prev' onClick={onPrevClick}></button>}
        </>
    )
}

export default DateSlider
