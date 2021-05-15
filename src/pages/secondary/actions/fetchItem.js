import axios from "axios";
import { setItemSuccess, setItemFailure } from '../reducers/secondaryPageReducer'

export const fetchItem = (category, item, language) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/${category}-items?item.${language}=${item}`)
            dispatch(setItemSuccess(response.data[0]))
        } catch (error) {
            dispatch(setItemFailure(error))
        }
    }
}