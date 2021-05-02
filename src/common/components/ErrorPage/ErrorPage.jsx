import React from 'react'
import errorImage from '../../../assets/image/404.png'
import './ErrorPage.scss'

const ErrorPage = () => {
    return (
        <img className='error-image' src={errorImage}/>
    )
}

export default ErrorPage
