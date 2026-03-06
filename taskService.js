const taskRepo = require('../repositories/taskRepository');
const aiService = require('./aiService');

exports.createTask = async (data, userId) => {
  const aiData = await aiService.generateAISummary(data.description);

  return taskRepo.createTask({
    ...data,
    aiSummary: aiData.summary,
    priority: aiData.priority,
    riskScore: aiData.riskScore,
    user: userId
  });
};
exports.getAllTasks = async () => {
  return await Task.find().populate("user", "email role");
};