import { insertTodo } from "../models/todo.mjs";

export async function addTodo(req, res) {
  const { todo } = req.body;

  const result = await insertTodo(todo, false);

  res.send({ success: true, todo: result });
}
