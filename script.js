// Exercise #3.1
function Cost(amount_fee, amount_transactions) {
  const Fee = amount_fee * 0.001;
  const TransactionFee = amount_transactions * 3;
  const totalCost = amount_fee + Fee + TransactionFee;
  return totalCost;
}
const totalAmount = 500;
const Transactions = 20;
const totalCost = Cost(totalAmount, Transactions);
console.log("Maria have cost", totalCost);

// Exercise #3.2
// Part 1
const name1 = "Jame";
const name2 = "Tar";
const name3 = "Pong";
const Display = `Welcome ${name1}, ${name2}, ${name3}!`;
console.log(Display);

// Part 2
function Age(YearOfbirth) {
  return 2024 - YearOfbirth;
}
console.log("Your age is ", Age(1996));

// Part 3
function welcome(name1, age1, name2, age2, name3, age3) {
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
}
welcome("Pong", 27, "jame", 25, "Tar", 30);