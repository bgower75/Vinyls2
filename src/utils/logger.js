const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: './logs/errorLog.log', level: 'error' }),
      new winston.transports.File({ filename: './logs/warnLog.log', level: 'warn' }),
      new winston.transports.File({ filename: './logs/infoLog.log', level: 'info'})
    ]
  });

// const logs = winston.createLogger(logger);
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
module.exports = logger;

// logger.info('Hello, MR Winston!');
// logger.debug('debugging here');
// logger.error('logging an error');
// logger.warn('logging a warning here');
