import sql from "../service/db.mjs";

export async function retreiveTodos() {
  const todos = await sql`select * from todos`;
  return todos;
}

export async function insertTodo(text, done) {
  const todos = await sql`
    insert into todos
      (title, done)
    values
      (${text}, ${done})
    returning id, title, done, created_at
  `;
  return todos;
}
