import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { fetchMoreItems } from '../../actions/fetchMoreItems'
import './Uploader.scss'

const Uploader = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const currentCategory = useSelector(state => state.primaryPage.currentCategory);
    const currentCategoryIndex = useSelector(state => state.primaryPage.categories.findIndex(element => element.url === currentCategory))

    const onUploadMore = () => {
        dispatch(fetchMoreItems(currentCategoryIndex , currentCategory))
    }

    return (
        <div className="uploader">
            <div className='uploader__container'>
                <div className="uploader__icon" onClick={onUploadMore}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4218 22.8478C13.9093 22.7701 14.2415 22.3117 14.1637 21.8242C14.0859 21.3366 13.6276 21.0045 13.14 21.0823C13.1347 21.0831 13.1294 21.084 13.1241 21.0849C7.76501 21.9953 2.68264 18.3889 1.77227 13.0298C0.861896 7.67071 4.46829 2.58834 9.82738 1.67797C15.1865 0.767593 20.2688 4.37404 21.1792 9.73309C21.7391 13.0288 20.5878 16.3834 18.1222 18.6409L16.8028 14.6806C16.6469 14.2121 16.1408 13.9588 15.6723 14.1146C15.2038 14.2705 14.9501 14.7768 15.1059 15.2452L16.8939 20.6094C17.0155 20.9746 17.3573 21.2209 17.7423 21.2209L23.106 21.2209C23.5998 21.2209 24 20.8206 24 20.3269C24 19.8331 23.5998 19.4329 23.106 19.4329L19.8404 19.4329C24.2192 14.8291 24.0368 7.5472 19.433 3.1684C14.8291 -1.2104 7.54726 -1.02801 3.16842 3.57587C-1.21043 8.17974 -1.02799 15.4616 3.57588 19.8404C6.20119 22.3373 9.84933 23.4517 13.4218 22.8478Z" fill="white"/>
                    </svg>
                </div>
                <h2 className="uploader__text">{t('Upload more')}</h2>
            </div>
        </div>
    )
}

export default Uploader
