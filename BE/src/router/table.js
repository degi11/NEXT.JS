import express from "express";
import { categoryTable, recordTable, userTable } from "../controller/table";

const table = expressRouter();

app.use("/user", userTable);
app.use("/record", recordTable);
app.use("/category", categoryTable);

export { table };
