// Index Signatures

// Index Signatures are useful when you're creating an object but you don't know the exact names of the objects keys but you do know the shape of the object and you can declare the type of the keys and the types of the values.
// There's another reason that are also useful adn that is because typescript requires an index signature if you attempt to access an object property dynamically.

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

//this below is an index signature an it says that all the keys will be strings and all the values will be numbers.
// interface TransactionObj {
//   // it can be readonly
//   readonly [index: string]: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40;

console.log(todaysTransactions["Dave"]);
// this is undefined because TP can't know wheather this  key exits because we used a index signature.

//*****************************************************************************

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Lucas",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  //what keyof does is create a union type and the union type is the specific string literal so it's a union type of 'name' 'GPA' and 'classes' the keyof is creating and it allows us to still loop through the object
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof Student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

//****************************************************************************

// interface Incomes {
//   [key: string]: number
// }

//this below is the equivalent of index signature above and we can use the literal type that we cann't use with interface methods, the drawback is that we can't say wheather some prop is a specific type, like in the exemple below it can only be a number, or it can only be a number or string, never string and number separateraly.

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
