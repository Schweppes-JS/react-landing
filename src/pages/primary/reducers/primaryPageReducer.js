const SET_CATEGORIES_SUCCESS = 'SET_CATEGORIES_SUCCESS'
const SET_CATEGORIES_FAILURE = 'SET_CATEGORIES_FAILURE'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
const SET_MORE_ITEMS_SUCCESS = 'SET_MORE_ITEMS_SUCCESS'
const SET_MORE_ITEMS_FAILURE = 'SET_MORE_ITEMS_FAILURE'
const SET_LANGUAGE = 'SET_LANGUAGE'

const initialState = {
    categories: null,
    currentCategory: null,
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
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case SET_MORE_ITEMS_SUCCESS:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                categories: [
                    ...state.categories.slice(0, action.payload.index),
                    {
                        ...state.categories[action.payload.index],
                        content: [
                            ...state.categories[action.payload.index].content,
                            ...action.payload.items
                        ]
                    },
                    ...state.categories.slice(action.payload.index + 1),
                ]
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
export const setCurrentCategory = (category) => ({type: SET_CURRENT_CATEGORY, payload: category})
export const setMoreItemsSuccess = (index, items) => ({type: SET_MORE_ITEMS_SUCCESS, payload: {index, items}})
export const setMoreItemsFailure = () => ({type: SET_MORE_ITEMS_FAILURE})
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language})