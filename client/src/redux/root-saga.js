import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'
import { imageSagas } from './image/image.sagas'

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(imageSagas),
    ])
}