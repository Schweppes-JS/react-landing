import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

const DateSlider = ({gallery, currentDateGroup, setCurrentDateGroup}) => {

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
        isCanClick && gallery.dates.find((dateGroup, index, array) => {
            setCanClick(false)
            if (Object.keys(dateGroup)[0] === currentDateGroup) {
                if (index < array.length - 2) {
                    setCurrentDateGroup(Object.keys(array[index+1])[0])
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
        isCanClick && gallery.dates.find((dateGroup, index, array) => {
            setCanClick(false)
            if (Object.keys(dateGroup)[0] === currentDateGroup) {
                if (index > 0) {
                    setCurrentDateGroup(Object.keys(array[index-1])[0])
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
        gallery.dates.length > 10 && gallery.dates.find((dateGroup, index) => {
            if (Object.keys(dateGroup)[0] === date) {
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
                return true
            }
        })
        setCurrentDateGroup(date)
    }

    return (
        <>
            <Slider ref={c => (slider = c)} {...settings}>
                {gallery.dates.map(dateGroup => 
                    <p className='date-slider__date' key={Object.keys(dateGroup)[0]} onClick={() => onTabClick(Object.keys(dateGroup)[0])}>
                        {Object.keys(dateGroup)[0]}
                    </p>)}
            </Slider>
            {isVisibleNextArrow && <button className='custom-button slick-next' onClick={onNextClick}></button>}
            {isVisiblePrevArrow && <button className='custom-button slick-prev' onClick={onPrevClick}></button>}
        </>
    )
}

export default DateSlider
