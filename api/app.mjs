import express, { json } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
import "dotenv/config";

import todoRouter from "./routes/todo.mjs";

import { initDb } from "./service/db.mjs";

app.use(json());
app.use(cors());

app.use("/api/todo", todoRouter);

app.listen(PORT, async () => {
  await initDb();
  console.log("Server started");
});
