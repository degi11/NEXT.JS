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
      res.send({ success: true, user: user });
    } else {
      res.send({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
