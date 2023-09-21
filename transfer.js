

// Function to populate sender and receiver dropdowns
function populateDropdowns() {
    const senderSelect = document.getElementById("sender");
    const receiverSelect = document.getElementById("receiver");

    // Iterate through the customersData array and populate the dropdowns
    customersData.forEach((customer) => {
        const senderOption = document.createElement("option");
        senderOption.value = customer.id;
        senderOption.textContent = `${customer.name} (Balance: $${customer.balance.toFixed(2)})`;
        senderSelect.appendChild(senderOption);

        const receiverOption = document.createElement("option");
        receiverOption.value = customer.id;
        receiverOption.textContent = `${customer.name} (Balance: $${customer.balance.toFixed(2)})`;
        receiverSelect.appendChild(receiverOption);
    });
}

// Function to handle money transfer
function handleTransfer(event) {
    event.preventDefault(); // Prevent the form from submitting (for demo purposes)

    // Get form values
    const senderId = parseInt(document.getElementById("sender").value);
    const receiverId = parseInt(document.getElementById("receiver").value);
    const amount = parseFloat(document.getElementById("amount").value);

    // Find sender and receiver objects
    const sender = customersData.find((customer) => customer.id === senderId);
    const receiver = customersData.find((customer) => customer.id === receiverId);

    if (!sender || !receiver) {
        alert("Invalid sender or receiver.");
        return;
    }

    if (amount <= 0 || amount > sender.balance) {
        alert("Invalid amount or insufficient balance.");
        return;
    }

    // Update balances (for demo purposes)
    sender.balance -= amount;
    receiver.balance += amount;

    // Display success message (for demo purposes)
    document.getElementById("success-message").textContent = "Transaction successful!";
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    populateDropdowns();
    const transferForm = document.getElementById("money-transfer-form");
    transferForm.addEventListener("submit", handleTransfer);
});
