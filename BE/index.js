import bodyParser from "body-parser";
import express, { response } from "express";
import cors from "cors";
import { user } from "./src/router/user.js";
import { record } from "./src/router/record.js";
import { category } from "./src/router/category.js";
import { auth } from "./src/router/auth.js";
import { table } from "./src/router/table.js";

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

app.listen(port, () => {
  console.log(`eloooooo ${port}`);
});
