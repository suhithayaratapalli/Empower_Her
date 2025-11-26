function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    getCount: function () {
      console.log("Current count:", count);
    }
  };
}
function createBankAccount() {
  let balance = 0; // private variable
  let transactionHistory = []; // private transaction log

  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push({ type: "deposit", amount });
      console.log("Deposited:", amount);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push({ type: "failed-withdraw", amount });
      } else {
        balance -= amount;
        transactionHistory.push({ type: "withdraw", amount });
        console.log("Withdrawn:", amount);
      }
    },

    getBalance: function () {
      console.log("Current balance:", balance);
    },

    getHistory: function () {
      console.log("Transaction History:", transactionHistory);
    }
  };
}
// Counter demo
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.getCount();

// Bank account demo
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.getBalance();
account.getHistory();
console.log(account.balance); // undefined (private variable)
