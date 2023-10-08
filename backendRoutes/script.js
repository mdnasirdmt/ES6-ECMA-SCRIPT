const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('./public'));



app.get('/', function (req, res) {
  res.render('index')
})



app.get('/home', function (req, res) {
    res.render('home')
  })

  app.get('/login', function (req, res) {
    res.render('login')
  })

  app.get('/about', function (req, res) {
    res.render('about', {srk:'Mohd Shahrukh', anuj: 'Anuj Kumar'})
  })

app.listen(3001)