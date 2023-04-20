# Doubts

1. What is typescript for?
   TypeScript is a programming language and a superset of JavaScript that adds optional static type checking and other features to JavaScript. It is designed to make it easier to build large-scale, complex applications by providing additional tooling, features, and syntax that help catch errors early in the development process.

   The main purpose of TypeScript is to provide better tooling and development experience for large-scale JavaScript projects. By introducing static types, TypeScript allows developers to catch errors early in the development process and prevent them from happening at runtime. This can save a lot of time and effort in the long run, especially for larger projects.

   Some of the key benefits of using TypeScript include better code organization and readability, improved maintainability, easier collaboration between team members, and reduced likelihood of runtime errors. Additionally, TypeScript provides a range of features such as classes, interfaces, enums, and decorators that can help make code more expressive, easier to understand, and easier to maintain.

   Overall, TypeScript is a powerful tool for developing complex, large-scale applications in JavaScript, and it can help improve the quality, reliability, and maintainability of codebases.

2. What is all this angle brackets notations? what are they for?
   the main purpose of the angle brackets in typescript are:

   - Type assertions, to assert a specific type for a value

   ```js
   const value: any = "hello";
   const length: number = (<string>value).length;
   ```

   - Specifying the type of a generic type

   ```js
   const numbers: Array<number> = [1, 2, 3];
   ```

   - Provide type arguments for type parameters

   ```js
   function getFirstElement<T>(array: T[]): T {
     return array[0];
   }
   ```

3. Didn't quite get the geric type.

   type parameterare are placeholders for types that are not specified when a type or function is defined.They are used to make types or functions more flexible and reusable, by allowing them to work with any type that meets certain requirements.
