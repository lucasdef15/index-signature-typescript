"use strict";
//******BASIC-TYPES******
let myName;
let myNumber;
let isLoading;
let album;
//******ARRAYS******
let myArray = [];
let bands = [];
// Tuple
let myTuple = ['Dave', 42, true];
//******OBJECT******
let myObj;
//****FUNCTIONS*****
const add = (a, b) => {
    return a + b;
};
const greetGuitarist = (guitarist) => {
    return guitarist;
};
//"For functions that would have a side effect and do not require an explicit return value, the return type should be 'void', which indicates that the function does not return any value at all."
const logMsg = (msg) => {
    console.log(msg);
};
// Optional Parameters
// the optional parameter does need to be the last parameter;
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
//we can give any param a default value;
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// Rest Parameters
// the spred operation means the rest of the parameters.
const total = (a, ...nums) => {
    return a + nums.reduce((prev, cur) => prev + cur);
};
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        //this line prevents the infinite loop and the functions returns void instead of never.
        if (i > 100)
            break;
    }
};
//****ENUMS*****
// Unlike most TypeScript features, Enums are not a type-level addition to js but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// basically here we can use both types because they are the same type 'string' and that's no problem.
const otherFun = (str) => str;
const myFunction = (str) => {
    return otherFun(str);
};
function printCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
//convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
let feijoada = true;
//*****Literal-Types**********
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
// One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.
let x = 'hello';
// It’s not much use to have a variable that can only have one value!
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(s, alignment) {
    // ...
}
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
let myArrayAgain = ['amelia', 'camila', 'jhon'];
console.log(myArrayAgain[0]); // amelia
console.log(myArrayAgain[1]); // acamila
console.log(myArrayAgain[2]); // jhon
const myObjAgain = {
    pizza: 32,
};
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 40 },
];
console.log(getUsersProperty(users, 'age'));
