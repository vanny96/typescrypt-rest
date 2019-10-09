import express = require('express');
import mongoose = require('mongoose');
import apiRouter from './router/apiRouter';

// Create a new express application instance
const app: express.Application = express();

// MongoDb Configuration
const dbUrl: string = "mongodb://localhost:27017/typerest";
mongoose.connect(dbUrl, {useNewUrlParser: true});
var db: mongoose.Connection = mongoose.connection;

// Convert body to json

app.use(express.json());

// Routing
app.use('/api', apiRouter);

app.use(function(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listening on
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});