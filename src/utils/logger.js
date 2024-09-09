const winston = require('winston');

// Logger for tracking activities
const logService = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error-log.log', level: 'error' }), // Changed log file name
        new winston.transports.Console({ format: winston.format.simple() }),
    ],
});

module.exports = logService;
