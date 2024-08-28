import { db } from "../../db.js";
import { createUser, getUser } from "./user.js";

// export const signUp = async (req, res) => {
//   const user = createUser(req, res);

//   try {
//     const result = await db.query();
//     res.status(201).json(result.rows);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// };

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUser(req, res);

    if (password === user[0].password) {
      res.status(200).send({ success: true, user: user });
    } else {
      res.send({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const signUp = async (req, res) => {
  const { email, name, password, avatar_image } = req.body;
  const QueryText = `
      INSERT INTO users (email, name, password, avatar_image)
      VALUES ($1, $2, $3, $4) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      email,
      name,
      password,
      avatar_image,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
