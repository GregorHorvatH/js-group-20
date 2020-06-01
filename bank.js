'use strict';

/**
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы
 * для работы с балансом и историей транзакций.
 */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: `f${Math.round(Math.random() * 1e8, 0).toString(16)}`,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log('недостаточно средств');
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions.reduce(
      (acc, item) => (item.type === type ? acc + item.amount : acc),
      0,
    );
  },
};

console.log('account balance:', account.getBalance());

account.deposit(50);
account.deposit(10);
account.deposit(25);
console.log('account balance:', account.getBalance());

account.withdraw(40);
account.withdraw(40);
account.withdraw(10); // недостаточно средств
console.log('account balance:', account.getBalance());

console.log(account.transactions);

const { id } = account.transactions[2];
console.log(account.getTransactionDetails(id));

console.log('DEPOSIT:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('WITHDRAW:', account.getTransactionTotal(Transaction.WITHDRAW));
