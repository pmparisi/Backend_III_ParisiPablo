import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import config from './config/config.js'; 
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import logger from './utils/logger.js';

mongoose.set('strictQuery', false);

const app = express();
const PORT = config.port;
const MONGO_URL = config.mongoUrl;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API AdoptMe',
            version: '1.0.0',
            description: 'API for user and adoption management',
        },
    },
    apis: ['./src/docs/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const connection = mongoose.connect(MONGO_URL)
    .then(() => {
        logger.info('Connected to MongoDB');
    })
    .catch(err => {
        logger.error('MongoDB connection error:', err);
    });
    
const server = app.listen(PORT, () => logger.info(`Listening on ${PORT}`));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.get('/loggerTest', (req, res) => {
    logger.debug('Debug log');
    logger.http('HTTP log');
    logger.info('Info log');
    logger.warning('Warning log');
    logger.error('Error log');
    logger.fatal('Fatal log');
    res.send('Logs generated! Check console and errors.log if in production.');
});

app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Something went wrong!');
});

export default app;