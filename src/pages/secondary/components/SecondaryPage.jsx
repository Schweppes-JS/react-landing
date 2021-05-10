import React, { useEffect } from 'react'
import { urlTransation } from '../../../common/services/translationService'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { fetchItem } from '../actions/fetchItem'
import Loader from '../../../common/components/Loader/Loader'
import { clearState } from '../reducers/secondaryPageReducer'
import './SecondaryPage.scss'
import Description from './Description/Description'
import Benefits from './Benefits/Benefits'
import Gallery from './Gallery/Gallery'

const SecondaryPage = ({setLightTheme}) => {

    const dispatch = useDispatch()
    const { params } = useRouteMatch('/:language?/:category/:item')
    const isLoading = useSelector(state => state.secondaryPage.isLoading)
    const currentItem = useSelector(state => state.secondaryPage.currentItem)
    const currentLanguage = useSelector(state => state.primaryPage.language)

    useEffect(() => {
        currentLanguage && dispatch(fetchItem(params.category, urlTransation(params.item)))
    }, [currentLanguage])

    useEffect(() => {
        setLightTheme(true)
        currentLanguage && dispatch(fetchItem(params.category, urlTransation(params.item)))
        return () => {
            dispatch(clearState())
        }
    }, [])

    return (
        <>
        {isLoading ? 
            <Loader /> : 
            <div className='presentation'>
                <div className="presentation__image-wrapper">
                    <img className="presentation__image" src={currentItem.image} />
                    
                    <button>See all</button>
                </div>
                <Description name={currentItem.header} image={currentItem.photo} info={currentItem.description}/>
                <Benefits characteristic={currentItem.benefits}/>
                <Gallery />
            </div>
        }
        </>
    )
}

export default SecondaryPage
