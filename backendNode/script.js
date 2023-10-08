const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(function middleware(req, res, next) {
    console.log('middleware function , this function run at first than routes ');
    next();
})

app.get('/', function (req, res) {
  res.send('Backend In Node / Learning Express / Routes / Middleware')
})

app.get('/home', function profile(req, res) {

    res.send('This is Md Nasir Hussain Profile ')
    
})

app.get('/contact', function contact(req, res, next) {
    res.send('Nasir Contact - 7008018121, mdnasirdmt@gmail.com')
    
})


app.get('/profile/:username', function profiles(req, res, next) {
    res.send(`This is a profile of ${req.params.username}`)
    
})

app.listen(3000)