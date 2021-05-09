const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'

const initialState = {
    currentItem: null,
    isLoading: false,
    backendError: ''
}

export default function secondaryPageReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state;
    }
}

export const setCurrentItem = (item) => ({type: SET_CURRENT_ITEM, payload: item})