import axios from 'axios'
import { setContentSuccess, setContentFailure } from '../reducers/primaryPageReducer'

export const fetchContent = (category) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/${category}-content`)
            dispatch(setContentSuccess(category, response.data))
        } catch (error) {
            dispatch(setContentFailure(error))
        }
    }
}