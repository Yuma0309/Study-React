// const str = null;
// console.log(str.substring(1));

// if (str !== null && str !== undefined) {
//   console.log(str.substring(1));
// }

// console.log(str?.substring(1));

// let value = null;
// console.log(value ?? '既定値');

let value = null;
value ??= '既定値';
console.log(value);
