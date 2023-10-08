const { error } = require('console');
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
    res.render('about', { srk: 'Mohd Shahrukh', anuj: 'Anuj Kumar' })
})

//   app.get('/error1', function (req, res, next) {

//     throw Error('Internal server error try after some time ')

//   })

app.get('/error', function (req, res, next) {

    throw Error('Internal server error, try after some time. ')

})

app.use(function errorHandler1(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

//   app.use(function errorHandler (err, req, res, next) {
//     if (res.headersSent) {
//       return next(err)
//     }
//     res.status(500)
//     res.render('error1', { error: err })
//   })


app.listen(3001)