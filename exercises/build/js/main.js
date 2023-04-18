"use strict";
const lucas = {
    name: "Lucas",
    age: 24,
    stack: ["js", "ts", "react"],
};
for (const key in lucas) {
    console.log(`${key}: ${lucas[key]}`);
}
const sum = function (obj) {
    let result = 0;
    for (const key in obj) {
        result += obj[key];
    }
    return result;
};
const nums = {
    num1: 10,
    num2: 50,
    num3: 10,
};
console.log(sum(nums));
const myObject = {
    name: "Alice",
    city: "New York",
    country: "USA",
};
const returnKeys = (obj) => {
    let result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
};
console.log(returnKeys(myObject));
