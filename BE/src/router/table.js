import express from "express";
import { categoryTable, recordTable, userTable } from "../controller/table.js";

const table = express.Router();

table
  .use("/user", userTable)
  .use("/record", recordTable)
  .use("/category", categoryTable);

export { table };
