import { db } from "../../db.js";

export const getCategory = async (req, res) => {
  const QueryText = "SELECT * FROM category";
  try {
    const result = await db.query(QueryText);
    res.status(201).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const QueryText = `
      INSERT INTO category (name, description, category_image)
      VALUES ($1, $2, $3) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      name,
      description,
      category_image,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { category_image } = req.body;

  try {
    const result = await db.query(
      "UPDATE category SET name = $1, category_image = $2 WHERE id = $3 RETURNING *",
      [name, id, category_image]
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

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM category WHERE id = $1", [id]);
    res.send("category deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
