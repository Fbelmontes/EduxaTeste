const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fortaleza@2023',
  database: 'eduxa',
});

connection.connect((err) => {
  if (err) {
    console.error(`Erro ao conectar na base de dados: ${err}`);
    return;
  }

  console.log('Conexão bem sucedida ao SQL');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;


  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Erro ao gerar hash da senha:', err);
      return res.status(500).send('Erro ao cadastrar usuário');
    }

    const insertUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(insertUserQuery, [email, hash], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).send('Erro ao cadastrar usuário');
      }

      return res.status(200).send('Usuário cadastrado com sucesso');
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const selectUserQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(selectUserQuery, [email], (err, results) => {
    if (err) {
      console.error('Erro ao autenticar usuário:', err);
      return res.status(500).send('Erro ao autenticar usuário');
    }

    if (results.length === 0) {
      return res.status(401).send('Credenciais inválidas');
    }


    bcrypt.compare(password, results[0].password, (err, result) => {
      if (err || !result) {
        return res.status(401).send('Credenciais inválidas');
      }

      return res.status(200).send('Usuário autenticado com sucesso');
    });
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
