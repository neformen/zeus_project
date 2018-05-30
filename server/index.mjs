import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve(path.dirname(''));

app.use(express.static(path.join(__dirname, "./../client")));

app.listen(port);

