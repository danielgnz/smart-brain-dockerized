import UserActionTypes from './user.types'

export const signUpStart = (credentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: credentials
})

export const signUpSuccess = (user) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const loginStart = (emailAndPassword) => ({
    type: UserActionTypes.LOGIN_START,
    payload: emailAndPassword
})

export const loginSuccess = (user) => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: user
})

export const loginFailure = (error) => ({
    type: UserActionTypes.LOGIN_FAILURE,
    payload: error
})

export const updatePeopleDetectedStart = (data) => ({
    type: UserActionTypes.UPDATE_PEOPLE_DETECTED_START,
    payload: data
})

export const updatePeopleDetectedSuccess = (data) => ({
    type: UserActionTypes.UPDATE_PEOPLE_DETECTED_SUCCESS,
    payload: data
})

export const updatePeopleDetectedFailure = (error) => ({
    type: UserActionTypes.UPDATE_PEOPLE_DETECTED_FAILURE,
    payload: error
})

export const signOut = () => ({
    type: UserActionTypes.SIGN_OUT
})
