const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bereid+123',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.log('Connection failed to database: ' + err);
    return;
  }
  console.log('Connection established');
});

conn.query('SHOW TABLES;', (error, result) => {
  console.log(result);
});

const insertPoniz = (name) => {
  conn.query(`INSERT INTO ponik(name) values('${name}')`, (err, result) => {
    if (err) {
      console.log('Failed to insert: ' + err.message);
      return;
    }
    console.log(result);
  }
  )
};

const showPoniz = () => {
  conn.query(`SELECT * FROM ponik`, (err, result) => {
    if (err) {
      console.log('Failed to show: ' + err.message);
      return;
    }
    console.log(result);
  }
  )
};

insertPoniz('Tutujka');
showPoniz();

conn.end();