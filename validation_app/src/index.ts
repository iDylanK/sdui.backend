import http from 'http';
import express, { Express } from 'express';
// import morgan from 'morgan';
import validationRoutes from './routes/validation';
// import reactRoutes from './routes/react';
// import jsonRoutes from './routes/json';
// import productRoutes from './routes/product';

const router: Express = express();

/** Logging */
// router.use(morgan('dev'));

/** Parse the request */
router.use(express.urlencoded({ extended: false }));

/** Takes care of JSON data */
router.use(express.json());

/** RULES OF THE API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    return next();
});

/** Routes */
router.use('/', validationRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message,
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
