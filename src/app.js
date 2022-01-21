import express, { json } from "express";
import morgan from "morgan";


const compression = require("compression");

const bodyParser = require("body-parser");
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 50, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 50, type: 'application/x-www-form-urlencoded' })




const app = express();
/* const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // Will not compress responses, if this header is present
    return false;
  }
  // Resort to standard compression
  return compression.filter(req, res);
};

// Compress all HTTP responses
app.use(compression({
  level:100,
  // filter: Decide if the answer should be compressed or not,
  // depending on the 'shouldCompress' function above
  filter: shouldCompress,
  // threshold: It is the byte threshold for the response 
  // body size before considering compression, the default is 1 kB
  threshold: 10*1000
})); */

// middlewares

app.use(jsonParser);
app.use(urlencodedParser);

//app.use(express.bodyParser({limit: '50mb'}));

app.use(morgan('dev'));
app.use(json());

export default app;
