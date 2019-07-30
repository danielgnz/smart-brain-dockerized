import ImageActionTypes from './image.types'

const INITIAL_STATE = {
    source: '',
    boundingBoxes: [],
    size: null,
    score: 0
}

const imageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ImageActionTypes.UPDATE_IMAGE_SOURCE:
            return {
                ...state,
                source: action.payload
            }
        case ImageActionTypes.FACE_RECOGNITION_SUCCESS:
            return {
                ...state,
                boundingBoxes: action.payload,
                score: action.payload.length
            }
        case ImageActionTypes.FACE_RECOGNITION_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case ImageActionTypes.CALCULATE_IMAGE_SIZE:
            return {
                ...state,
                size: {
                    width: action.payload.width,
                    height: action.payload.height
                }
            }
        case ImageActionTypes.RESET_IMAGE_STATE:
            return {
                ...INITIAL_STATE
            }
        default:
            return state
    }
}

export default imageReducer