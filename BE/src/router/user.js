import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controller/user.js";

const user = express.Router();

user
  .get("/", getUsers)
  .post("/create", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export { user };