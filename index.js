const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/', (req, res) => {
    res.send('mmm!')
})
app.get('/hello', cors(corsOptions), function (req, res, next) {
    res.send('Hey, I\'m a Node.js app!')
    
  })
app.listen(4500, () => {
    console.log('Server is up on 4500')
})