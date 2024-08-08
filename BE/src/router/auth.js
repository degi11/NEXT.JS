import express from "express";
import { signIn } from "../controller/auth.js";

const auth = express.Router();

auth.post("/signIn", signIn);

export { auth };
