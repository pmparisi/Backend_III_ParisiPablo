import winston from 'winston';
import path from 'path';
import __dirname from './utils.js';
import config from '../config/config.js';

const logLevels = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5,
    },
    colors: {
        debug: 'blue',
        http: 'cyan',
        info: 'green',
        warning: 'yellow',
        error: 'red',
        fatal: 'magenta',
    },
};

const transportConsole = new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

const transportFile = new winston.transports.File({
    filename: path.join(__dirname, config.errorLogFile),
    level: config.fileLogLevel,
    format: winston.format.json(),
});

const devLogger = winston.createLogger({
    levels: logLevels.levels,
    transports: [transportConsole],
});

const prodLogger = winston.createLogger({
    levels: logLevels.levels,
    transports: [transportConsole, transportFile],
});

const logger = process.env.NODE_ENV === 'production' ? prodLogger : devLogger;

export default logger;