const winston = require('winston');

const logs = {
    'transports': [
        new winston.transports.File({
            level: 'info',
            filename: './winstonLogs/infoLog.log'
        }),
        new winston.transports.Console({
            level: 'debug'
        }),
        new winston.transports.File({
            level: 'error',
            filename: './winstonLogs/errorLog.log'
        })
    ]
};

// const logger = winston.createLogger(logs);

module.exports = logs;

// logger.info('Hello, MR Winston!');
// logger.debug('debugging here');
// logger.error('logging an error');
// logger.warn('logging a warning here');
