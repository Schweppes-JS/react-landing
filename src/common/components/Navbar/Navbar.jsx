import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom'
import { setLanguage } from '../../../pages/primary/reducers/primaryPageReducer'
import { useLocation }from 'react-router-dom'
import './Navbar.scss'
import { useTranslation } from 'react-i18next'
import { translator } from '../../../common/services/translationService'
import classNames from 'classnames'

const Navbar = ({currentLanguage, isLightTheme}) => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const history = useHistory()
    const { params } = useRouteMatch('/:language?/:category?/:item?')
    const categories = useSelector(state => state.primaryPage.categories)
    const currentItem = useSelector(state => state.secondaryPage.currentItem)

    useEffect(() => {
        if (params.language) {
            if (params.language === 'en' || params.language === 'ru'|| params.language === 'ua') {
                dispatch(setLanguage(params.language))
                translator.changeLanguage(params.language)
                !params.category && history.push(`/${params.language}/living-complex`)
            } else {
                dispatch(setLanguage('ua'))
                history.push(`/ua${params.category ? `/${t(params.category)}` : '/living-complex'}${params.item ? `/${t(params.item)}` : ''}`)
            }
        } else {
            dispatch(setLanguage('ua'))
            translator.changeLanguage('ua')
            history.push(`/ua${history.location.pathname}`)
        }
    }, [])

    useEffect(() => {
        currentLanguage && translator.changeLanguage(params.language)
    }, [params.language])

    const onLanguageChange = (event) => {
        translator.changeLanguage(event.target.value)
        dispatch(setLanguage(event.target.value))
        history.push(`/${event.target.value.toLowerCase()}/${params.category}${params.item ? `/${currentItem.item[event.target.value]}` : ''}`)
    }

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                {categories.map(category => <li key={category.url} className='navbar__list-item'>
                                                <NavLink className={classNames('navbar__link', {
                                                    'light-theme': isLightTheme,
                                                    'dark-theme': !isLightTheme,
                                                })} activeClassName={classNames({
                                                    'light-theme__active-link': isLightTheme,
                                                    'dark-theme__active-link': !isLightTheme
                                                })}
                                                    isActive={(match,location) => location.pathname.includes(category.url)}
                                                    to={`/${params.language}/${category.url}`}>
                                                    {category.title[currentLanguage]}
                                                </NavLink>
                                            </li>)}
                <select className={classNames('navbar__select-block', {
                    'light-theme__select': isLightTheme,
                    'dark-theme__select': !isLightTheme
                })} value={
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
