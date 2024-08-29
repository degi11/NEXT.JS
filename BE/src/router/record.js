import express from "express";
import {
  createRecord,
  getRecords,
  deleteRecord,
  updateRecord,
  getRecordByUserid,
} from "../controller/record.js";

const record = express.Router();

record
  .get("/", getRecords)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord)
  .get("/get-user-records", getRecordByUserid);

export { record };
