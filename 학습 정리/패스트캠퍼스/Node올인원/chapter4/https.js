'use strict'

const https = require('https')
const options = {
    hostname:'encrypted.google.com',
    port:443,
    path:'/',
    method:'GET' // CREATE - POST READ - GET UPDATE - PUT DELETE
}

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', e => {
    process.stdout.write(e)
})

req.end()