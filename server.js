require('dotenv').config();
const logger = require('./src/utils/logger');
const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    logger.info("Database connected");

    app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
      logger.info(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => logger.error(err));