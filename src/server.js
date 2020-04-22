const server = require('./api');
const logger = require('./utils/logger');
const config = require('dotenv').config();

server.listen(process.env.PORT, () => {
    logger.info(`Listening to server on port ${process.env.PORT}`);
});