class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// class Deposit {
//   //Pass in the account that the deposit this for
//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   //Update the balance in the account
//   commit() {
//     this.account.balance += this.amount;
//   }
// }

// class Withdrawal {
//   //Pass in the account that the withdrawal this for
//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   //Update the balance in the account
//   commit() {
//     this.account.balance -= this.amount;
//   }
// }


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("billybob");

console.log('Starting Balance:', myAccount.balance);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);

console.log('Ending Balance:', myAccount.balance);
