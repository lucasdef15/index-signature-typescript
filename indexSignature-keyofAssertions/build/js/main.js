"use strict";
// Index Signatures
//this below is an index signature an it says that all the keys will be strings and all the values will be numbers.
// interface TransactionObj {
//   // it can be readonly
//   readonly [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40;
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Lucas",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    //what keyof does is create a union type and the union type is the specific string literal so it's a union type of 'name' 'GPA' and 'classes' the keyof is creating and it allows us to still loop through the object
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
