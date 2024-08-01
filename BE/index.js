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
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { error } from "node:console";

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// app.get("/", async (req, res) => {
//   const TableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   db.query(TableQueryText);
//   res.send("success");
// });

app.get("/createTable", async (req, res) => {
  const TableQueryText = `CREATE TABLE "users" (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255) UNIQUE,
  avatar_image TEXT,
  createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  currency_type currency_type DEFAULT 'USD' NOT NULL
  )
  `;
  db.query(TableQueryText);
  res.send("success");
});

app.post("/user/create", async (req, res) => {
  const { email, name, password, avatar_image, currency_type } = req.body;
  console.log(email);
  const QueryText = `
    INSERT INTO users (email, name, password, avatar_image, currency_type)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      email,
      name,
      password,
      avatar_image,
      currency_type,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log("hello world");
});
