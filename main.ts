//******BASIC-TYPES******
let myName: string;
let myNumber: number;
let isLoading: boolean;
let album: any;

//******ARRAYS******
let myArray: (string | number)[] = [];
let bands: string[] = [];

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];

//******OBJECT******
let myObj: object;

//****FUNCTIONS*****
const add = (a: number, b: number) => {
  return a + b;
};

const greetGuitarist = (guitarist: object): object => {
  return guitarist;
};

//"For functions that would have a side effect and do not require an explicit return value, the return type should be 'void', which indicates that the function does not return any value at all."
const logMsg = (msg: any): void => {
  console.log(msg);
};

// Optional Parameters
// the optional parameter does need to be the last parameter;
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

//default param value
//we can give any param a default value;
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// Rest Parameters
// the spred operation means the rest of the parameters.
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, cur) => prev + cur);
};

// Never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    //this line prevents the infinite loop and the functions returns void instead of never.
    if (i > 100) break;
  }
};

//****ENUMS*****
// Unlike most TypeScript features, Enums are not a type-level addition to js but something added to the language and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

//**********************************************************************
//*****Type-Aliases**********
// When we want to use the same type more than once and refer to it by a single name.
// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};

type ID = number | string;

type one = string;

type two = string;

// basically here we can use both types because they are the same type 'string' and that's no problem.
const otherFun = (str: two): two => str;

const myFunction = (str: string): one => {
  return otherFun(str);
};

//*****Interface**********
// An interface declaration is another way to name an object type:
interface PointInterface {
  x: number;
  y: number;
}

function printCoord(pt: PointInterface): void {
  console.log(pt.x);
  console.log(pt.y);
}

//*****Type-Assertions**********
// Sometimes you will have information about the type of a value that TypeScript can’t know about.For example,if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.In this situation, you can use a type assertion to specify a more specific type:

// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// myCanvas.innerHTML = '<div><h1>Hi!</h1></div>';

type One = string;
type Two = string | number;
type Three = 'hello';
type farofa = boolean;

//convert to more or less specific
let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world';
let e = <string | number>'world';
let feijoada = <farofa>true;

//*****Literal-Types**********
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.

let x: 'hello' = 'hello';

// It’s not much use to have a variable that can only have one value!

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  // ...
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// Of course, you can combine these with non-literal types:
interface Options {
  width: number;
}
function configure(x: Options | 'auto') {
  // ...
}

//**********************************************************************
//*****Index-Signature**********
// Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

// In those cases you can use an index signature to describe the types of possible values, for example:

interface StringArray {
  [index: number]: string;
}

let myArrayAgain: StringArray = ['amelia', 'camila', 'jhon'];
console.log(myArrayAgain[0]); // amelia
console.log(myArrayAgain[1]); // acamila
console.log(myArrayAgain[2]); // jhon

// Above, we have a StringArray interface which has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.

// Only some types are allowed for index signature properties: string, number, symbol, template string patterns, and union types consisting only of these.

interface ObjectInterface {
  [index: string]: number;
}

const myObjAgain: ObjectInterface = {
  pizza: 32,
};

//**********************************************************************
//*****Generics/Type-parameters**********
interface HasID {
  id: number;
}

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 40 },
];

console.log(getUsersProperty(users, 'age'));
