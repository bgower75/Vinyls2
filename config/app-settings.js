const winston = require('winston');

const appSettings = {
    winston: {
        errorLogConfig: {
            level: 'error',
            transports: [
                new winston.transports.File({
                    filename: './winstonLogs/errorLog.log'
                }),
                new winston.transports.Console()
            ]
        },
        warnLogConfig: {
            level: 'warn',
            transports: [
                new winston.transports.File({
                    filename: './winstonLogs/warnLog.log'
                }),
                new winston.transports.Console()
            ]
        }
    },
};

module.exports = appSettings;