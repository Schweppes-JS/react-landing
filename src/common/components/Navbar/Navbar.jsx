import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLanguage } from '../../../pages/primary/reducers/primaryPageReducer'
import { useLocation }from "react-router-dom"
import './Navbar.scss'
import { useTranslation } from 'react-i18next'
import { translator } from '../../../common/services/translationService'

const Navbar = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const currentLanguage = useSelector(state => state.primaryPage.language)
    const categories = useSelector(state => state.primaryPage.categories)
    const language = useSelector(state => state.primaryPage.language)

    useEffect(() => {
        const urlLanguage = pathname.match(/^\/([\w]{2})|$/)
        if (urlLanguage) {
            const languageCode = urlLanguage[1].toUpperCase()
            if (languageCode === 'EN' || languageCode === 'RU' || languageCode === 'UA') {
                dispatch(setLanguage(languageCode))
            }
        }
    }, [])

    

    useEffect(() => {
        translator.changeLanguage(currentLanguage)
    }, [currentLanguage])

    const onLanguageChange = (event) => {
        translator.changeLanguage(event.target.value)
        dispatch(setLanguage(event.target.value))
    }

    return (
        <div className="navbar">
            <ul className="navbar__list">
                {categories.map(category => <li key={category.url} className="navbar__list-item">
                                                <NavLink className="navbar__link" activeClassName='navbar__active-link'
                                                    isActive={(match,location) => location.pathname.includes(category.url)}
                                                    to={`/${category.url}`}>
                                                    {t(category.title)}
                                                </NavLink>
                                            </li>)}
                <select className="navbar__select-block" value={language} onChange={onLanguageChange}>
                    <option>UA</option>
                    <option>RU</option>
                    <option>EN</option>
                </select>
            </ul>

        </div>
    )
}

export default Navbar
