import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../../common/components/Card/Card'
import Uploader from '../Uploader/Uploader'
import { setCurrentCategory } from '../../reducers/primaryPageReducer';
import { fetchContent } from '../../actions/fetchContent'
import './Content.scss'

const Content = ({category, setLightTheme}) => {

    const content = useSelector(state => state.primaryPage.content)

    const dispatch = useDispatch();
    useEffect(() => {
        setLightTheme(false);
        dispatch(setCurrentCategory(category.url))
        !content[category.url] && dispatch(fetchContent(category.url))
    }, [])

    return (
        <>
            {content[category.url] && <div className='content'>
                {content[category.url].map((item, index) => {
                    if (index % 4 === 0 || index === 0) {
                        return <Card key={item.id} info={item}
                            imageAnimationDelay='delay02'
                            headerAnimationDelay='delay04'
                            addressAnimationDelay='delay06'/>
                    } else if (index % 4 === 1 || index === 1) {
                        return <Card key={item.id} info={item}
                            imageAnimationDelay='delay0'
                            headerAnimationDelay='delay0'
                            addressAnimationDelay='delay0'/>
                    } else if (index % 4 === 2 || index === 2) {
                        return <Card key={item.id} info={item}
                            imageAnimationDelay='delay02'
                            headerAnimationDelay='delay02'
                            addressAnimationDelay='delay02'/>
                    } else if (index % 4 === 3 || index === 3) {
                        return <Card key={item.id} info={item}
                            imageAnimationDelay='delay04'
                            headerAnimationDelay='delay04'
                            addressAnimationDelay='delay04'/>
                    }
                })}
            </div>}
            {content[category.url] && <Uploader />}
        </>
    )
}

export default Content
