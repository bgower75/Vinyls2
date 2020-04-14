const log4js = require('log4js');
const logger = log4js.getLogger();

log4js.configure ({
    appenders: { 
            fileAppenderError: { type: 'file', filename: './logs/errorLog.log'},
            fileAppenderWarn: { type: 'file', filename: './logs/warningLog.log'},
            fileAppenderInfo: { type: 'file', filename: './logs/infoLog.log'},
            console: { type: 'console'}
    },
    categories: { 
        default: { appenders: ['fileAppender, console'], level: 'error' },
        // warn: { appenders: ['fileAppenderWarn'], level: 'warn'},
        // error: {appenders: ['fileAppenderError'], level: 'error'},
        // info: {appenders: ['fileAppenderInfo'], level: 'info'}
    }
});

logger.level = 'debug';

logger.debug('Trace, log4js');
logger.debug('Debug, log4js');
logger.info('Hello, log4js');
logger.warn('Warn, log4js');
logger.error('Error, log4js');

module.exports = logger;