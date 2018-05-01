const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import routers
const todosRouter = require('./api/routes/todosRouter');

//connect mongoose to mlab
mongoose.connect('mongodb://Alejandro:test@ds255309.mlab.com:55309/react-todo-list');

//import morgan
app.use(morgan('dev'));
//use body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //"*" this argument to set how has access 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/todos', todosRouter);

//error handling for when req goes wrong
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message
            }
        });
});

//it is module exports not export
module.exports = app;