export const userTable = async (req, res) => {
  const TableQueryText = `CREATE TABLE "users" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255) UNIQUE,
      avatar_image TEXT,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type currency_type DEFAULT 'USD' NOT NULL
      )
      `;
  try {
    const result = await db.query(TableQueryText);
    res.send("success");
  } catch (error) {
    console.log(err);
    return res.status(500).json({ error: "L" });
  }
};

export const recordTable = async (req, res) => {
  const TableQueryText = `CREATE TABLE "record" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid REFERENCES users ON DELETE RESTRICT,
      user_id uuid NOT NULL,
      category_id uuid NOT NULL,
      FOREIGN KEY (user_id)
      references users(id),
      FOREIGN KEY (category_id)
      references category(id),
      name TEXT,
      amount REAL NOT NULL,
      transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
      description TEXT,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
      `;
  try {
    const result = await db.query(TableQueryText);
    res.send("success");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "L" });
  }
};

export const categoryTable = async (req, res) => {
  const TableQueryText = `CREATE TABLE "users" (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(100),
      description TEXT,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_image
      )
      `;
  try {
    const result = await db.query(TableQueryText);
    res.send("success");
  } catch (error) {
    console.log(err);
    return res.status(500).json({ error: "L" });
  }
};
