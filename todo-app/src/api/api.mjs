const API_URL = "https://js24-todo-api.onrender.com/api/todo";

export async function getTodos() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function postTodo(title) {
  const response = await fetch(API_URL, {
    body: JSON.stringify({ todo: title }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
