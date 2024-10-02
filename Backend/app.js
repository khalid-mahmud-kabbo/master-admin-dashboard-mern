const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');

dotenv.config();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(helmet({
	contentSecurityPolicy: {
	  directives: {
		defaultSrc: ["'self'"],
		frameSrc: ["'self'", 'https://eksoftwares.com'],
		connectSrc: ["'self'", 'https://eksoftwares.com']
	  },
	},
  }));
  
app.use(mongoSanitize());
app.use(hpp());

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 10000
})
app.use(limiter)

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Database Connected Successfully....!!')
}).catch((err) => {
	console.log(err)
})


const router = require('./routes/api');

app.use("/api/v1", router);

app.use(express.static('front/dist'));
app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname, 'front', 'dist', 'index.html'));
});


module.exports = app;
