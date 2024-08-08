import express from "express";
import {
  createRecord,
  getRecords,
  deleteRecord,
  updateRecord,
} from "../controller/record.js";

const record = express.Router();

record
  .get("/", getRecords)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
