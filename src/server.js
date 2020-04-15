const server = require('./api');
const logger = require('./utils/logger');

server.listen(3001, () => {
    logger.info(`Listening to server on port 3001`);
});