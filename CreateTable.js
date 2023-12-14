const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
  )
`;

connection.query(createUsersTable, (err, results) => {
  if (err) {
    console.error('Erro ao criar a tabela de usuários: ${err}');
    return;
  }

  console.log('Tabela de usuários criada com sucesso');
});

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fortaleza@2023',
  database: 'eduxa'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados.');

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `;

  connection.query(createUsersTable, (err, results) => {
    if (err) {
      console.error('Erro ao criar a tabela de usuários: ${err}');
      return;
    }
    console.log('Tabela de usuários criada com sucesso');
  });

  const createResponsavelTable = `
    CREATE TABLE Responsavel (
      id INT PRIMARY KEY AUTO_INCREMENT,
      nome VARCHAR(255),
      sobrenome VARCHAR(255),
      cpf VARCHAR(14),
      rg VARCHAR(20),
      email VARCHAR(255),
      telefone VARCHAR(20),
      celular VARCHAR(20)
    )
  `;

  connection.query(createResponsavelTable, (err, results) => {
    if (err) throw err;
    console.log('Tabela Responsavel criada com sucesso.');
  });

  const createEnderecoTable = `
    CREATE TABLE Endereco (
      id INT PRIMARY KEY AUTO_INCREMENT,
      responsavel_id INT,
      cep VARCHAR(10),
      endereco VARCHAR(255),
      numero VARCHAR(10),
      bairro VARCHAR(100),
      cidade VARCHAR(100),
      pais VARCHAR(50),
      estado VARCHAR(2),
      FOREIGN KEY (responsavel_id) REFERENCES Responsavel(id)
    )
  `;

  connection.query(createEnderecoTable, (err, results) => {
    if (err) throw err;
    console.log('Tabela Endereco criada com sucesso.');
  });

  connection.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão:', err);
      return;
    }
    console.log('Conexão encerrada.');
  });
});
