import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 8080,
    mongoUrl: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    cookieName: process.env.COOKIE_NAME || 'defaultCookie',  
    cookieExpiration: process.env.COOKIE_EXPIRATION,
    logLevel: process.env.LOG_LEVEL,
    errorLogFile: process.env.ERROR_LOG_FILE,
    fileLogLevel: process.env.FILE_LOG_LEVEL,
};

export default config;