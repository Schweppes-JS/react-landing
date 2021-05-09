import React from 'react'
import loader from '../../../assets/image/loader.svg'
import './Loader.scss'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader}/>
        </div>
    )
}

export default Loader
