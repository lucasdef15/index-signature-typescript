// Exercise 01
interface Person {
  [keys: string]: unknown;
}

// Exercise 02
interface Developer {
  [keys: string]: any;
  name: string;
  age: number;
  stack: string[];
}

const lucas: Developer = {
  name: "Lucas",
  age: 24,
  stack: ["js", "ts", "react"],
};

for (const key in lucas) {
  console.log(`${key}: ${lucas[key]}`);
}

// Exercise 03
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
  description?: any;
}

// Exercise 04
interface MathObj {
  [index: string]: number;
}

const sum = function (obj: MathObj): number {
  let result: number = 0;
  for (const key in obj) {
    result += obj[key];
  }
  return result;
};

const nums: MathObj = {
  num1: 10,
  num2: 50,
  num3: 10,
};

console.log(sum(nums));

// Exercise 05
interface stringSignature {
  [keys: string]: string;
}

const myObject: stringSignature = {
  name: "Alice",
  city: "New York",
  country: "USA",
};

const returnKeys = (obj: stringSignature): string[] => {
  let result: string[] = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
};

console.log(returnKeys(myObject));
