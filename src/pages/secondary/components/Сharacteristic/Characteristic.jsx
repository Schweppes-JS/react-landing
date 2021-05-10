import React from 'react'
import { useTranslation } from 'react-i18next'
import './Characteristic.scss'

const Characteristic = ({info}) => {

    const { t } = useTranslation()

    return (
        <div className='characteristic'>
            <h3 className='characteristic__amount'>{info.amount}</h3>
            <p className='characteristic__title'>{t(info.title)}</p>
        </div>
    )
}

export default Characteristic
