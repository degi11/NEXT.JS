import { db } from "../../db.js";

export const getRecords = async (req, res) => {
  const QueryText = "SELECT * FROM record";
  try {
    const result = await db.query(QueryText);
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const createRecord = async (req, res) => {
  const { name, user_id, amount, description, category_id } = req.body;
  const QueryText = `
      INSERT INTO record (name, user_id, amount, description, category_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      name,
      user_id,
      amount,
      description,
      category_id,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { description, amount } = req.body;

  try {
    const result = await db.query(
      "UPDATE record SET description = $1, amount = $2 WHERE id = $3 RETURNING *",
      [description, amount, id]
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

export const deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM record WHERE id = $1", [id]);
    res.send("record deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
