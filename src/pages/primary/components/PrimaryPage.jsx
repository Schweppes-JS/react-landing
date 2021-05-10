import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import ErrorPage from '../../../common/components/ErrorPage/ErrorPage.jsx'
import Loader from '../../../common/components/Loader/Loader.jsx'
import SecondaryPage from '../../secondary/components/SecondaryPage'
import './PrimaryPage.scss'
import Navbar from '../../../common/components/Navbar/Navbar.jsx'
import { fetchCategories } from '../actions/fetchCategories.js'
import Content from './Content/Content.jsx'

const PrimaryPage = () => {

    const [isLightTheme, setLightTheme] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setLightTheme(false)
        dispatch(fetchCategories())
    }, [])

    const isLoading = useSelector(state => state.primaryPage.isLoading)
    const categories = useSelector(state => state.primaryPage.categories)
    const currentLanguage = useSelector(state => state.primaryPage.language)

    return (
        <>
            {isLoading ?  
                <Loader /> :
                <div className='container'>
                    <Navbar currentLanguage={currentLanguage} isLightTheme={isLightTheme}/>
                    <Switch>
                        <Redirect exact from='/' to='/living-complex'/>
                        {categories.map(category =>
                            <Route key={category.url} exact path={`/:language?/${category.url}`} render={() =>
                                <Content category={category} setLightTheme={setLightTheme}/>} />
                        )}
                        {categories.map(category =>
                            <Route key={category.url} exact path={`/:language?/${category.url}/:item?`} render={() =>
                                <SecondaryPage setLightTheme={setLightTheme}/>} />
                        )}
                        <Route path='*' render={() => <ErrorPage />}/>
                    </Switch>
                </div>
            }
        </>
    )
}

export default PrimaryPage
