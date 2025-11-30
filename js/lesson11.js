// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Lina",
  accountNumber: "5832021835449",
  balance: 200,
  deposit(cash) {
    this.balance += cash;
    alert(`На рахунку ${this.balance} грн`);
  },
  withdraw(cash) {
    if (cash > this.balance) {
      alert("Недостатньо грошей");
      return;
    }
    this.balance -= cash;
    alert(`На рахунку ${this.balance} грн`);
  },
};

if (confirm("Ви хочете поповнити рахунок?")) {
  const money = Number(prompt("Введіть суму для поповнення"));
  if (money > 0 && !isNaN(money)) {
    bankAccount.deposit(money);
  } else {
    alert("Невірна сума!");
  }
} else if (confirm("Ви хочете зняти гроші?")) {
  const money = Number(prompt("Введіть суму для зняття"));
  if (money > 0 && !isNaN(money)) {
    bankAccount.withdraw(money);
  } else {
    alert("Невірна сума!");
  }
}




// // 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.



// /*
//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // лічильник транзакції
//   nextId: 1,
//   // Історія транзакцій
//   transactions: [],
//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//         amount: amount,
//         type: type,
//         id: this.nextId
//     }
//     this.nextId += 1
//     return transaction
//   },
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount
//     const transaction = this.createTransaction(amount,Transaction.DEPOSIT)
//     this.transactions.push(transaction)
//   },
//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(amount > this.balance){
//         alert("Недостатньо коштів для зняття")
//         return 
//     }
//     this.balance -= amount
//     const transaction = this.createTransaction(amount,Transaction.WITHDRAW)
//     this.transactions.push(transaction)
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },
//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for(let i = 0; i < this.transactions.length; i+= 1 ){
//         const transaction = this.transactions[i]
//         // console.log(transaction.id);
//         if(transaction.id === id){
//             return transaction
//         }
//     }
//   },

//   /*

//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };
// account.deposit(1000)
// account.deposit(500)
// account.deposit(349)
// account.deposit(2890)

// account.withdraw(1200)
// account.withdraw(224)

// // console.log(account.transactions);

// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(5));
// Давид Ушарук
// 12:23
// // 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.



// /*
//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // лічильник транзакції
//   nextId: 1,
//   // Історія транзакцій
//   transactions: [],
//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//         amount: amount,
//         type: type,
//         id: this.nextId
//     }
//     this.nextId += 1
//     return transaction
//   },
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount
//     const transaction = this.createTransaction(amount,Transaction.DEPOSIT)
//     this.transactions.push(transaction)
//   },
//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if(amount > this.balance){
//         alert("Недостатньо коштів для зняття")
//         return 
//     }
//     this.balance -= amount
//     const transaction = this.createTransaction(amount,Transaction.WITHDRAW)
//     this.transactions.push(transaction)
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance
//   },
//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for(let i = 0; i < this.transactions.length; i+= 1 ){
//         const transaction = this.transactions[i]
//         if(transaction.id === id){
//             return transaction
//         }
//     }
//   },

//   /*

//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for(let i = 0;i < this.transactions.length; i+= 1){
//         if(this.transactions[i].type === type){
//          total += this.transactions[i].amount
//         }
//     }
//     return total
//   },
// };
// account.deposit(1000)
// console.log("Сума після поповнення", account.getBalance());
// account.deposit(500)
// console.log("Сума після поповнення", account.getBalance());
// account.deposit(349)
// console.log("Сума після поповнення", account.getBalance());
// account.deposit(2890)
// console.log("Сума після поповнення", account.getBalance());




// account.withdraw(1200)
// console.log("Сума після зняття", account.getBalance());
// account.withdraw(224)
// console.log("Сума після зняття", account.getBalance());
// // console.log(account.transactions);

// // console.log(account.getTransactionDetails(3));
// // console.log(account.getTransactionDetails(5));
// // console.log(account.getTransactionTotal("deposit"));
// // console.log(account.getTransactionTotal("withdraw"));


// const totalDeposit = account.getTransactionTotal("deposit")
// console.log(`Загальна сума поповнення складає ${totalDeposit} гривень`);
// const totalWithdraw = account.getTransactionTotal("withdraw")
// console.log(`Загальна сума зняття складає ${totalWithdraw} гривень`);

// const transactionDetails = account.getTransactionDetails(5)
// console.log(`Деталі по транзакції`,transactionDetails);