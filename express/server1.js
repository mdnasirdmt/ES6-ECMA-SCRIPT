const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('First server created , wooh ! I used nodemon')
})

app.listen(3001)


// node server1.js
// http://localhost:3001/
// 

// npm i nodemon
// if  node server.js , is not working then use
// npx node server.js 

// nodemon is a tool that helps develop Node.js based applications by automatically restarting 
// the node application when file changes in the directory are detected.