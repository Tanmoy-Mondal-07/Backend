const http = require("http")
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}:${req.url} New Req Recived\n`

    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    console.log(myUrl.pathname);

    fs.appendFile('log.txt', log, (err, data) => {
        res.end("hello from server")
    })
    // console.log(req);
    console.log('new req resived');

});

myServer.listen(8000, () => console.log('server started'))