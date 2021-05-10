import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { urlTransation } from '../../../common/services/translationService'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { fetchItem } from '../actions/fetchItem'
import Loader from '../../../common/components/Loader/Loader'
import './SecondaryPage.scss'

const SecondaryPage = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { params } = useRouteMatch('/:language?/:category/:item')
    const isLoading = useSelector(state => state.secondaryPage.isLoading)
    const currentItem = useSelector(state => state.secondaryPage.currentItem)
    const currentLanguage = useSelector(state => state.primaryPage.language)

    useEffect(() => {
        currentLanguage && dispatch(fetchItem(params.category, urlTransation(params.item)))
    }, [currentLanguage])

    useEffect(() => {
        currentLanguage && dispatch(fetchItem(params.category, urlTransation(params.item)))
    }, [])

    return (
        <>
        {isLoading ? 
            <Loader /> : 
            <div className='presentation'>
                <div className="presentation__image-container">
                    <img className="presentation__image" src={currentItem.image} />
                </div>
            </div>
        }
        </>
    )
}

export default SecondaryPage
