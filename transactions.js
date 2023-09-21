// transactions.js

// Sample transaction data (replace this with data from your server)
const transactionsData = [
    { id: 1, sender: "Customer 1", receiver: "Customer 2", amount: 500, date: "2023-09-01" },
    { id: 2, sender: "Customer 2", receiver: "Customer 3", amount: 300, date: "2023-09-02" },
    { id: 3, sender: "Customer 3", receiver: "Customer 1", amount: 200, date: "2023-09-03" },

    // Add more transaction objects as needed
];

// Function to display transaction data in the table
function displayTransactions() {
    const transactionTableBody = document.getElementById("transaction-table-body");

    transactionsData.forEach((transaction) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.sender}</td>
            <td>${transaction.receiver}</td>
            <td>$${transaction.amount.toFixed(2)}</td>
            <td>${transaction.date}</td>
        `;
        transactionTableBody.appendChild(row);
    });
}

// Call the displayTransactions function when the page loads
window.addEventListener("load", displayTransactions);

