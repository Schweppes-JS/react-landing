import React, { useEffect } from 'react'
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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const isLoading = useSelector(state => state.primaryPage.isLoading);
    const categories = useSelector(state => state.primaryPage.categories);

    return (
        <>
            {isLoading ?  
                <Loader /> :
                <div className='page-container'>
                    <Navbar />
                    <div className='page-container__content'>
                        <Switch>
                            <Redirect exact from='/' to='/living-complex'/>
                            {categories.map(category =>
                                <Route key={category.url} exact path={`/:language?/${category.url}`} render={() =>
                                    <Content category={category}/>} />
                            )}
                            {categories.map(category =>
                                <Route key={category.url} exact path={`/:language?/${category.url}/:item?`} render={() =>
                                    <SecondaryPage />} />
                            )}
                            <Route path='*' render={() => <ErrorPage />}/>
                        </Switch>
                    </div>
                </div>
            }
        </>
    )
}

export default PrimaryPage
