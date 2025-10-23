import postgres from "postgres";

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      done BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;
  console.log("Table initialized");
}

const sql = postgres(process.env.DATABASE_URL, {
  port: 5432,
  ssl: "require",
});

export default sql;
