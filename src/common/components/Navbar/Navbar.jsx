import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { setLanguage } from '../../../pages/primary/reducers/primaryPageReducer'
import { useLocation }from "react-router-dom"
import './Navbar.scss'
import { useTranslation } from 'react-i18next'
import { translator } from '../../../common/services/translationService'

const Navbar = ({currentLanguage}) => {
    console.log('render', currentLanguage)

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const history = useHistory()
    const { params } = useRouteMatch('/:language?/:category?/:item?')
    const categories = useSelector(state => state.primaryPage.categories)

    useEffect(() => {
        if (params.language) {
            if (params.language === 'en' || params.language === 'ru'|| params.language === 'ua') {
                dispatch(setLanguage(params.language))
                translator.changeLanguage(params.language)
                !params.category && history.push(`/${params.language}/living-complex`)
            } else {
                history.push(`/ua${params.category ? `/${t(params.category)}` : ''}${params.item ? `/${t(params.item)}` : ''}`)
            }
        } else {
            history.push(`/ua${history.location.pathname}`)
        }
    }, [])

    useEffect(() => {
        currentLanguage && translator.changeLanguage(params.language)
    }, [params.language])

    const onLanguageChange = (event) => {
        console.log(params.item)
        translator.changeLanguage(event.target.value)
        dispatch(setLanguage(event.target.value))
        console.log(params.item)
        history.push(`/${event.target.value.toLowerCase()}/${params.category}${params.item ? `/${t(params.item)}` : ''}`)
    }

    return (
        <div className="navbar">
            <ul className="navbar__list">
                {categories.map(category => <li key={category.url} className="navbar__list-item">
                                                <NavLink className="navbar__link" activeClassName='navbar__active-link'
                                                    isActive={(match,location) => location.pathname.includes(category.url)}
                                                    to={`/${params.language}/${category.url}`}>
                                                    {t(category.title)}
                                                </NavLink>
                                            </li>)}
                <select className="navbar__select-block" value={
                    params.language ? params.language : 'ua'}
                    onChange={onLanguageChange}
                >
                    <option>ua</option>
                    <option>ru</option>
                    <option>en</option>
                </select>
            </ul>

        </div>
    )
}

export default Navbar
