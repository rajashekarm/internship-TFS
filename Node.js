const mysql = require('mysql');

// Create a database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Raja@950',
    database: 'banking_system'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Insert a new customer into the 'customers' table
const newCustomer = {
    name: 'John Doe',
    email: 'john@example.com',
    balance: 1000.00
};

connection.query('INSERT INTO customers SET ?', newCustomer, (error, results) => {
    if (error) {
        console.error('Error inserting new customer:', error);
    } else {
        console.log('New customer added:', results.insertId);
    }
});

// Fetch all customers from the 'customers' table
connection.query('SELECT * FROM customers', (error, results) => {
    if (error) {
        console.error('Error fetching customers:', error);
    } else {
        console.log('All Customers:');
        console.table(results);
    }
});

// Close the database connection
connection.end((err) => {
    if (err) {
        console.error('Error closing the database connection:', err);
    }
    console.log('Database connection closed');
});
