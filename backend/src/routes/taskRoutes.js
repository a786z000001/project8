const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.post('/', authenticate, taskController.createTask);

// Admin-only
router.get('/admin/all',
  authenticate,
  authorize(['admin']),
  taskController.getAllTasks
);


module.exports = router;
