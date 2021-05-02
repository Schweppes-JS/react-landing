import axios from 'axios'
import { setCategoriesFailure, setCategoriesSuccess } from '../reducers/primaryPageReducer'


export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/categories')
            dispatch(setCategoriesSuccess(response.data))
        } catch (error) {
            dispatch(setCategoriesFailure(error))
        }
    }
}