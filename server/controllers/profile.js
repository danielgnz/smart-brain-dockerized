const handleProfile = db => (req, res) => {
    const { id } = req.params

    db('users')
    .where({ id })
    .select('*')
        .then(user => {
            user.length
            ? res.status(200).send(user[0])
            : res.status(400).send('user not found') 
        })
        .catch(error => {
            res.status(400).send(error)
        })
}

module.exports = {
    handleProfile,
}