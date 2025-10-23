import { Router } from "express";
const router = Router();

import { checkBody } from "../middleware/index.mjs";
import { getTodos } from "../controllers/getTodos.mjs";
import { addTodo } from "../controllers/addTodo.mjs";

router.get("/", getTodos);

router.post("/", checkBody, addTodo);

export default router;
