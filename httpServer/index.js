// const http = require("http")
const expreess = require('express')

const app = expreess()

app.get('/', (req, res) => {
    return res.send("home page")
})

app.get('/about', (req, res) => {
    return res.send("about page")
})

app.listen(8000, () => console.log("server started"))
// const myServer = http.createServer(app)
// myServer.listen(8000, () => console.log('server started'))

//verison
// ^major release/braking update. ~recommended bug fix . minor fixes