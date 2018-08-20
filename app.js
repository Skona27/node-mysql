// require packages
const faker = require("faker");
const mysql = require("mysql");

// connect to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'join_us'
});

// generate fake user data
var data = [];

for(let i = 0; i < 500; i++) {
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

// define sql suery
var query = 'INSERT INTO users (email, created_at) VALUES ?';

// execute query
connection.query(query, [data], (err, result) => {
  if (err) console.log(err);
});

// end connection
connection.end();