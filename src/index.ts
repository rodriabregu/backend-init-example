import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express';
import router from "./routes";
const morgan = require('morgan');
const cors = require('cors');

const app = express()
createConnection()

app.use(router)
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const server = app.listen(3001, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Server app listening at http://%s:%s", host, port)
});
