/*
Simple Exception Handling in JavaScript

This file shows very basic examples using `if/else` for checks and `try/catch`
for catching runtime errors. Keep it small and friendly for beginners.
*/

// 1) if/else example: validate before doing work
// Simple account withdraw example using throw/catch

const account = {
  owner: 'Alice',
  balance: 100 // starting balance
};

// withdraw: throws simple messages when something is wrong
function withdraw(acc, amount) {
  if (typeof amount !== 'number') {
    throw 'Please provide a numeric amount';
  }
  if (amount <= 0) {
    throw 'Withdrawal amount must be greater than zero';
  }
  if (amount > acc.balance) {
    throw 'Insufficient funds';
  }
  acc.balance -= amount;
  return acc.balance;
}

// Call site: use try/catch to handle errors thrown by withdraw
console.log('Starting balance:', account.balance);
try {
  console.log('Withdraw 30 -> New balance:', withdraw(account, 30));
  console.log('Withdraw 80 -> New balance:', withdraw(account, 80)); // will throw
} catch (err) {
     try {
  console.log('Transaction failed:', err);
  withdraw(account, 20); // try a smaller amount
 
  throw 'Critical error during withdrawal'; // re-throwing a new error
}catch (finalErr) {
  console.log('Final catch:', finalErr);
}

}

console.log('Final balance:', account.balance);

/* Quick notes for students:
- `throw` sends an error; here we throw simple messages (strings).
- `try` runs code that might throw; `catch` receives the thrown value.
- Use `if/else` checks before throwing to give clearer messages.
*/
