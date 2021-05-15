import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import './Characteristic.scss'

const Characteristic = ({info}) => {

    const { t } = useTranslation()
    const currentLanguage = useSelector(state => state.primaryPage.language)

    return (
        <div className='characteristic'>
            <h3 className='characteristic__amount'>{info.amount}</h3>
            <p className='characteristic__title'>{info.title[currentLanguage]}</p>
        </div>
    )
}

export default Characteristic
