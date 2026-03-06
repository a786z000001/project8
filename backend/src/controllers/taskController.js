const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
});

exports.createTask = async (req, res, next) => {
  try {
    await taskSchema.validateAsync(req.body);
    const task = await taskService.createTask(req.body, req.user.id);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};
