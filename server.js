const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Raja@950',
  database: 'banking_system', // Use the name of your database
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});

// Define API endpoints and handle database interactions here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
