import { retreiveTodos } from "../models/todo.mjs";

export async function getTodos(req, res) {
  const todos = await retreiveTodos();

  res.json({ success: true, todos });
}
