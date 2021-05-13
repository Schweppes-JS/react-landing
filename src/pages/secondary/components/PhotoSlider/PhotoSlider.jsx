import React from 'react'
import Slider from "react-slick"
import './PhotoSlider.scss'

const PhotoSlider = ({dates, currentDateGroup}) => {

    let slider
    const settings = {
        className: "slider variable-width",
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        accessibility: true
    };

    return (
        <>
            <div className="image-slider-wrapper">
                <Slider ref={c => (slider = c)} {...settings }>
                        {dates.find(dateGroup => Object.keys(dateGroup)[0] === currentDateGroup)[currentDateGroup]
                            .map(photo => <img className='image-slider-wrapper__photo' key={photo} src={photo}/>)}
                </Slider>
            </div>
            <button className='custom-button slick-next' onClick={() => slider.slickNext()}></button>
            <button className='custom-button slick-prev' onClick={() => slider.slickPrev()}></button>
        </>
    )
}

export default PhotoSlider
