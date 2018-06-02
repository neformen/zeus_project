import * as express from "express";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;
const dirname = path.resolve(path.dirname(""));


app.use(express.static(path.join(dirname, "./../client")));

app.listen(port);
