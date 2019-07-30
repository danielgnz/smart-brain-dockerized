const Clarifai = require('clarifai')

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = new Clarifai.App({
    apiKey: process.env.CLARIFAI_KEY
})

const handleApiCall = () => (req, res) => {
    const { imageUrl } = req.body

    app.models
	.predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
	.then(data => res.status(200).send(data))
	.catch(error => res.status(400).send(error))
}

const updateScore = (db) => (req, res) => {
    const { peopleDetected, currentUser: { email } } = req.body

    db('users')
    .where({ email })
    .select('score')
    .then(user => {
        const newScore = Number(user[0].score) + Number(peopleDetected)
        
        db('users')
        .where({ email })
        .update({
            score: newScore
        })
        .returning('*')
        .then(updatedUser => res.status(200).send(updatedUser[0]))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
}

module.exports = { 
    handleApiCall,
    updateScore
}