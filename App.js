const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const validator = require('validator');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressMongoSanitize());

const apiLimiter = expressRateLimit({windowMs: 15*60*100, max: 100})
app.use('/api', apiLimiter)

const appRoutes = require('./src/Routes/api')
app.use("/api", appRoutes);
app.use((req, res) => {
    res.status(404).json({status: "error", message:'Not Found'})
})

module.exports = app
