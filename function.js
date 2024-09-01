// Initialize the bank account object
const bankAccount = {
    balance: 0 // initial balance set to 0
};

// Question 1 Task 1: Create a function to handle deposits into a bank account.
function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        return`Deposit sucessfull. New balance: $${bankAccount.balance.toFixed(2)}`;
    } else {
        return "Deposit amount must be positive.";
    }
}

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.
function withdraw(amount) {
    if (amount > 0 && amount <= bankAccount.balance) {
        bankAccount.balance -= amount;
        return `Withdrawal sucessful. New balance: $${bankAccount.balance.toFixed(2)}`;
    } else if (amount > bankAccount.balance) {
        return "Insufficient balance.";
    } else {
        return "Withdrawal amount must be positive.";
    }
}

// Task 3: Develop a function to check the current balance of the account.
function checkBalance() {
    return `Current balance: $${bankAccount.balance.toFixed(2)}`;

}

// Example Useage:
// console.log(deposit(200)); // Deposit $200
// console.log(withdraw(100)); // Withdraw $ 100
// console.log(checkBalance()); // Check current balance

