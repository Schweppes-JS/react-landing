import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { fetchItem } from '../actions/fetchItem'
import Loader from '../../../common/components/Loader/Loader'
import { clearState } from '../reducers/secondaryPageReducer'
import './SecondaryPage.scss'
import Description from './Description/Description'
import Benefits from './Benefits/Benefits'
import Gallery from './Gallery/Gallery'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const SecondaryPage = ({setLightTheme}) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const history = useHistory()
    const { params } = useRouteMatch('/:language?/:category/:item')
    const isLoading = useSelector(state => state.secondaryPage.isLoading)
    const currentItem = useSelector(state => state.secondaryPage.currentItem)
    const currentLanguage = useSelector(state => state.primaryPage.language)

    useEffect(() => {
        currentLanguage && dispatch(fetchItem(params.category, params.item, currentLanguage))
    }, [currentLanguage])

    useEffect(() => {
        setLightTheme(true)
        currentLanguage && dispatch(fetchItem(params.category, params.item, currentLanguage))
        return () => {
            dispatch(clearState())
        }
    }, [])

    const redirect = () => {
        history.push(`/${params.language}/${params.category}`)
    }

    return (
        <>
        {isLoading ? 
            <Loader /> : 
            <div className='presentation'>
                <div className="presentation__image-wrapper">
                    <img className="presentation__image obscuration" src={currentItem.image} />
                    <div className="presentation__overlay scaling"></div>
                    <div className="presentation__text-wrapper">
                        <p className="presentation__architect slideOutLeft delay04">{`${t('Architects')}: ${currentItem.architect[currentLanguage]}`}</p>
                        <h1 className="presentation__header slideOutLeft delay08">{currentItem.header[currentLanguage]}</h1>
                        <button className="presentation__button slideOutUp delay12" onClick={redirect}>{t('See all')}</button>
                    </div>
                </div>
                {currentItem && Object.keys(currentItem.constructor).map(section => {
                        switch(section) {
                            case 'description':
                                return <Description
                                          key={section}
                                          currentLanguage={currentLanguage}
                                          name={currentItem.header[currentLanguage]}
                                          description={currentItem.constructor.description}
                                        />
                            case 'benefits':
                                return <Benefits
                                          key={section}
                                          characteristic={currentItem.constructor.benefits}
                                        />
                            case 'gallery':
                                return <Gallery
                                          key={section}
                                          gallery={currentItem.constructor.gallery}
                                        />
                        }
                    }
                )}
            </div>
        }
        </>
    )
}

export default SecondaryPage
