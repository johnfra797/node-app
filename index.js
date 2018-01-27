const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app!')
})

app.listen(4500, () => {
    console.log('Server is up on 4500')
})