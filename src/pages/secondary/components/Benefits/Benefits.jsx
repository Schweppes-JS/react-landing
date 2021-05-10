import React from 'react'
import { useTranslation } from 'react-i18next'
import './Benefits.scss'
import Characteristic from '../Сharacteristic/Characteristic'

const Benefits = ({ characteristic }) => {
    console.log(characteristic)

    const { t } = useTranslation()

    return (
        <div className='benefits'>
            <h2 className='benefits__headline'>{t('main stones')}</h2>
            <div className="benefits__characteristic-wrapper">
                <div className="benefits__overlay">
                    {Array.from(Array(6).keys()).map((key) => <div key={key} className='overlay__blank'></div>)}
                </div>
                {characteristic.map(characteristic => <Characteristic key={characteristic.id} info={characteristic}/>)}
            </div>
        </div>
    )
}

export default Benefits
