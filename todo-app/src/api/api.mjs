export async function getTodos() {
  const response = await fetch("");
  return await response.json();
}

export async function postTodo(title) {
  const response = await fetch("", {
    body: JSON.stringify({ todo: title }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
