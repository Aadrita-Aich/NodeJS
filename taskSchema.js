const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    isCompleted: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
