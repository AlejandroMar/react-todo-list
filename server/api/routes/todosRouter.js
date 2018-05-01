const express = require('express');
const router = express.Router();
const taskModel = require('../models/taskModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    taskModel.find()
        .exec()
        .then(result => {
            console.log('from fetch ', result )
            res.status(200).json(result);
        })
});

router.post('/', (req, res, next) => {
    const task = new taskModel({
        _id: new mongoose.Types.ObjectId(),
        task: req.body.task,
        done:false,
        id:req.body.id
    });
   task.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            task: task,
             message: 'task submited'
            })
    })
    
    
});

module.exports = router;