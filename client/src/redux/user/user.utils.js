import axios from 'axios'

export const updateScore = (score, currentUser) => {
    const { email } = currentUser
    return axios.post('/updateScore', {
        score,
        email
    })
}