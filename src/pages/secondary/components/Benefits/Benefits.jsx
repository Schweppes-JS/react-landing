import React from 'react'
import { useTranslation } from 'react-i18next'
import './Benefits.scss'
import Characteristic from '../Сharacteristic/Characteristic'

const Benefits = ({ characteristic }) => {

    const { t } = useTranslation()

    return (
        <div className='benefits'>
            <h2 className='benefits__headline slideOutDown delay04'>{t('main stones')}</h2>
            <div className="benefits__characteristic-wrapper obscuration">
                <div className="benefits__overlay">
                    {Array.from(Array(6).keys()).map((key) => <div key={key} className='overlay__blank'></div>)}
                </div>
                {characteristic.map(characteristic => <Characteristic key={characteristic.id} info={characteristic}/>)}
            </div>
        </div>
    )
}

export default Benefits
