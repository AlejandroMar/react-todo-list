const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    task: String,
    done: Boolean,
    id: Number
});

module.exports = mongoose.model('Task', taskSchema);