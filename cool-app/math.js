const { number } = require("yup");

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const backAccount = {
  income: 1000,
  expense: 500,
  getBalance() {
    return { balance: this.income - this.expense };
  },
};

const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

module.exports = {
  add,
  subtract,
  backAccount,
  sum,
};
