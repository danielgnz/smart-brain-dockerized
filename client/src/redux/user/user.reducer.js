import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.LOGIN_SUCCESS:   
        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.UPDATE_PEOPLE_DETECTED_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.LOGIN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.UPDATE_PEOPLE_DETECTED_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT: 
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }


}

export default userReducer