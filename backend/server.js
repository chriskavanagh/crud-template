import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"; // logs requests
import "dotenv/config";
import main from "./controllers/main";

var db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: "",
    password: "",
    database: "crud-practice-1"
  }
});

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
// or built in . . .
// app.use(express.urlencoded({ extended: false }))
app.use(morgan("combined")); // use 'tiny' or 'combined'

app.get("/", (req, res) => res.send("hello world"));
app.get("/crud", (req, res) => main.getTableData(req, res, db));
app.post("/crud", (req, res) => main.postTableData(req, res, db));
app.put("/crud", (req, res) => main.putTableData(req, res, db));
app.delete("/crud", (req, res) => main.deleteTableData(req, res, db));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`MERN app listening on port ${PORT}`));
