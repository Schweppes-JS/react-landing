import axios from 'axios'
import { setMoreItemsFailure, setMoreItemsSuccess, setUploadAmount } from '../reducers/primaryPageReducer'

export const fetchMoreItems = (currentCategory) => {
    return async (dispatch, getState) => {
        const nextPage = getState().primaryPage.uploadAmount[currentCategory];
        try {
            const response = await axios.get(`http://localhost:3001/${currentCategory}-content?id_gte=10&_page=${nextPage ? nextPage : 1}&_limit=3`)
            dispatch(setMoreItemsSuccess(currentCategory, response.data))
            dispatch(setUploadAmount(currentCategory))
        } catch (error) {
            dispatch(setMoreItemsFailure(error))
        }
    }
}