import axios from 'axios'
import { setMoreItemsFailure, setMoreItemsSuccess } from '../reducers/primaryPageReducer'

export const fetchMoreItems = (category) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/living-complex')
            dispatch(setMoreItemsSuccess(category, response.data))
        } catch (error) {
            dispatch(setMoreItemsFailure(error))
        }
    }
}