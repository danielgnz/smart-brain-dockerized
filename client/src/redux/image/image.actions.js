import ImageActionTypes from './image.types'

export const updateImageSource = (imageUrl) => ({
    type: ImageActionTypes.UPDATE_IMAGE_SOURCE,
    payload: imageUrl
})

export const faceRecognitionStart = (data) => ({
    type: ImageActionTypes.FACE_RECOGNITION_START,
    payload: data
})

export const faceRecognitionSuccess = (data) => ({
    type: ImageActionTypes.FACE_RECOGNITION_SUCCESS,
    payload: data
})

export const faceRecognitionFailure = (error) => ({
    type: ImageActionTypes.FACE_RECOGNITION_FAILURE,
    payload: error
})

export const calculateImageSize = (image) => ({
    type: ImageActionTypes.CALCULATE_IMAGE_SIZE,
    payload: image
})

export const resetImageState = () => ({
    type: ImageActionTypes.RESET_IMAGE_STATE
})