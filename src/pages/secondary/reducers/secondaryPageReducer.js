const SET_ITEM_SUCCESS = 'SET_ITEM_SUCCESS'
const SET_ITEM_FAILURE = 'SET_ITEM_FAILURE'

const initialState = {
    currentItem: null,
    isLoading: true,
    backendError: ''
}

export default function secondaryPageReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ITEM_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                currentItem: action.payload
            }
        case SET_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                currentItem: action.payload
            }
        default:
            return state;
    }
}

export const setItemSuccess = (item) => ({type: SET_ITEM_SUCCESS, payload: item})
export const setItemFailure = (error) => ({type: SET_ITEM_FAILURE, payload: error})