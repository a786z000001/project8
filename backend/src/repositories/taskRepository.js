const Task = require('../models/Task');

exports.createTask = (data) => Task.create(data);
exports.getTasksByUser = (userId) => Task.find({ user: userId });
