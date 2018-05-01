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

router.delete("/:taskId", (req, res, next) => {
    const id = req.params.taskId;
    taskModel.remove({ id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.patch("/:taskId", (req, res, next) => {
    const id = req.params.taskId;
    console.log(req.body)
    const updateOps = {};
    for (let ops of req.body) {
        
      updateOps[ops.propName] = ops.value;
    }
    console.log(updateOps)
    taskModel.update({ id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;