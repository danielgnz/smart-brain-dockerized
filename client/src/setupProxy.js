const proxy = require('http-proxy-middleware')

const PORT = process.env.APP_SERVER_PORT

module.exports = function(app) {
    app.use(proxy('/*', { 
        target: `http://server:${PORT}/`,
        secure: false,
    }))
}