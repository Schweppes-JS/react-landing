import axios from "axios";
import { setItemSuccess, setItemFailure } from '../reducers/secondaryPageReducer'

export const fetchItem = (category, item) => {
    console.log(category, item)
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/items')
            console.log(response)
            console.log(response.data[category])
            dispatch(setItemSuccess(response.data[category][item]))
        } catch (error) {
            dispatch(setItemFailure(error))
        }
    }
}