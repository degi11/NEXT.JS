import { db } from "../../db.js";

export const getUsers = async (req, res) => {
  const QueryText = "SELECT * FROM users";
  try {
    const result = await db.query(QueryText);
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const getUser = async (req, res) => {
  const { email } = req.body;
  const QueryText = "SELECT * FROM users WHERE email = $1 ";
  try {
    const result = await db.query(QueryText, [email]);
    return result.rows;
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const createUser = async (req, res) => {
  const { email, name, password, avatar_image, currency_type } = req.body;
  const QueryText = `
      INSERT INTO users (email, name, password, avatar_image, currency_type)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      email,
      name,
      password,
      avatar_image,
      currency_type,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const result = await db.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Item not found" });
    } else {
      res.status(201).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.send("user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const filterUser = async (req, res) => {
  let body = req.body;
  const { query } = body;
  delete body.query;
  let queryText = "SELECT * FROM users  ";
  queryText = queryText + query;

  try {
    const result = await db.query(queryText, [...Object.values(body)]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
