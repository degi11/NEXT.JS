// import bodyParser from "body-parser";
// import express from "express";
// import fs from "node:fs";

// const app = express();
// const port = 8000;
// const data = [];

// app.use(bodyParser.json());

// app.post("/addData", (req, res) => {
//   console.log(req.body, "request");
//   data.push(req.body);
//   res.send("success OK");
// });

// app.get("/getData", (req, res) => {
//   res.send(data);
// });

// app.listen(port, () => {
//   console.log(`helloooooooooo ${port}`);
// });

import bodyParser from "body-parser";
import express, { response } from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { user } from "./src/router/user.js";
import { record } from "./src/router/record.js";
import { category } from "./src/router/category.js";
import { auth } from "./src/router/auth.js";
import { table } from "node:console";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/user", user);
app.use("/record", record);
app.use("/category", category);
app.use("/api", auth);
app.use("/", table);

// app.get("/", async (req, res) => {
//   const TableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   db.query(TableQueryText);
//   res.send("success");
// });

app.listen(port, () => {
  console.log(`eloooooo ${port}`);
});
