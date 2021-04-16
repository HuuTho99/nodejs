// const http = require('http')

// const server = http.createServer(function (req, res) {
//     if (req.url === '/') {
//         res.writeHead(200, { "Content-Type": "text/html" })
//         res.write('<h1>Trang chu</h1>')
//         res.end();
//     } else if (req.url === '/student') {
//         res.writeHead(200, { "Content-Type": "text/html" })
//         res.write('<h1>Student</h1>')
//         res.end();
//     }

// })

// server.listen(4000)

const express = require('express');
const router = require('./router')

const app = express();

app.use('/', (req, res, next) => {
    if ('ok') {
        next();
    } else {
        res.send('Khong duoc quyen')
    }
})

app.use('/', router)



app.listen(4000, () => {
    console.log('server run on port 4000')
})