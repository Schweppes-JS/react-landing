const SET_CATEGORIES_SUCCESS = 'SET_CATEGORIES_SUCCESS'
const SET_CATEGORIES_FAILURE = 'SET_CATEGORIES_FAILURE'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
const GET_CONTENT_SUCCESS = 'GET_CONTENT_SUCCESS'
const GET_CONTENT_FAILURE = 'GET_CONTENT_FAILURE'
const SET_MORE_ITEMS_SUCCESS = 'SET_MORE_ITEMS_SUCCESS'
const SET_MORE_ITEMS_FAILURE = 'SET_MORE_ITEMS_FAILURE'
const SET_UPLOAD_AMOUNT = 'SET_UPLOAD_AMOUNT'
const SET_LANGUAGE = 'SET_LANGUAGE'

const initialState = {
    categories: null,
    currentCategory: null,
    content: {},
    language: null,
    isLoading: true,
    uploadAmount: {},
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
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.payload.category]: [
                        ...action.payload.content
                    ]
                }
            }
        case GET_CONTENT_FAILURE:
            return {
                ...state,
                backendError: action.payload
            }
        case SET_MORE_ITEMS_SUCCESS:
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
        case SET_UPLOAD_AMOUNT:
            return {
                ...state,
                uploadAmount: {
                    ...state.uploadAmount,
                    [action.payload]:
                        state.uploadAmount[action.payload] ? state.uploadAmount[action.payload] + 1 : 2
                }
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
export const setCategoriesFailure = (error) => ({type: SET_CATEGORIES_FAILURE, payload: error})
export const setCurrentCategory = (category) => ({type: SET_CURRENT_CATEGORY, payload: category})
export const setContentSuccess = (category, content) => ({type: GET_CONTENT_SUCCESS, payload: {content, category}})
export const setContentFailure = (error) => ({type: GET_CONTENT_FAILURE, payload: error})
export const setMoreItemsSuccess = (index, items) => ({type: SET_MORE_ITEMS_SUCCESS, payload: {index, items}})
export const setMoreItemsFailure = (error) => ({type: SET_MORE_ITEMS_FAILURE, payload: error})
export const setUploadAmount = (currentCategory) => ({type: SET_UPLOAD_AMOUNT, payload: currentCategory})
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language})