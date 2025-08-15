const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const ENV = process.env.NODE_ENV || "development";
const config = {
  host: ENV === "development" ? "localhost" : "db",
  user: "user",
  password: "password",
  database: "nodedb",
};

const connection = mysql.createConnection(config);
const insertSql = "INSERT INTO people (name) VALUES ('Eric')";
const selectSql = "SELECT * FROM people";

const mysql_query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

app.get("/", async (req, res) => {
  const error = (err, res) => {
    console.error("Erro ao consultar o banco de dados:", err);
    return res.status(500).send("Erro interno do servidor");
  };
  try {
    await mysql_query(insertSql);
    const results = await mysql_query(selectSql);
    res.send(
      `<h1>Full Cycle Rocks!</h1><br /> <h3>Lista de nomes cadastrada no banco de dados.</h3><br /><ul>${results
        .map((row) => `<li>${row.name}</li>`)
        .join("")}</ul>`
    );
  } catch (err) {
    error(err, res);
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
