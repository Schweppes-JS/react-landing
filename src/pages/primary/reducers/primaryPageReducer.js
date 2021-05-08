const SET_CATEGORIES_SUCCESS = "SET_CATEGORIES_SUCCESS"
const SET_CATEGORIES_FAILURE = "SET_CATEGORIES_FAILURE"
const SET_LANGUAGE = "SET_LANGUAGE"

const initialState = {
    categories: null,
    language: 'UA',
    isLoading: true,
    backendError: ''
}

export default function primaryPageReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case SET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                backendError: action.payload
            }
        case SET_MORE_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case SET_MORE_ITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                backendError: action.payload
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export const setCategoriesSuccess = (categories) => ({type: SET_CATEGORIES_SUCCESS, payload: categories})
export const setCategoriesFailure = () => ({type: SET_CATEGORIES_FAILURE})
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language})