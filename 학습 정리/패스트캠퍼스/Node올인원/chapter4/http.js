'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    // 데이터 형식을 지정
    res.setHeader('Content-Type', 'text/html')
    res.end('<div>Hello world</div>')
})

// const port = process.env.port
const port = 8000
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
