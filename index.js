const express = require('express')
var cors = require('cors')
const app = express()

var allowedOrigins = ['http://someorigin.com',
                      'http://anotherorigin.com'];
app.use(cors({

    origin: function(origin, callback){
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  
  }));



app.use('/', function (req, res, next) {
    res.send('mmmm!')
    
  })

app.use('/hello', function (req, res, next) {
    res.send('Hey, I\'m a Node.js app!')
    
  })
app.listen(4500, () => {
    console.log('Server is up on 4500')
})