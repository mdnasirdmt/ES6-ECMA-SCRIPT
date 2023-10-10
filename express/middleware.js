const express = require("express");
const app = express();


// Middleware function to log incoming requests
app.use((req, res, next) => {
    console.log(`Received request at ${new Date()}`);
    next(); // Pass control to the next middleware
});

app.use(function (res, req, next) {

    console.log('middle ware 1');
    next();
})


app.get('/', function (req, res) {
    res.send("express tutorial")
});


app.get('/profile', function (req, res) {
    res.send("user profile")
});

app.get('/contacts', function (req, res) {
    res.send("user cantacts")
});

app.listen(3003, () => {
    console.log('Server started on port 3003');
});
// app.listen(3003);


// Middleware in the context of web development and routing refers to a mechanism that sits between the incoming HTTP request and 
// the application's main route handler. Middleware functions are designed to perform tasks such as request processing, 
// authentication, logging, data validation, and more. 
// They are executed in the order they are defined in the application's routing configuration,
//  and they can modify the request or response objects or terminate the request-response cycle.
