let add = (a, b) => a + b;

let prepare = (f, a, b) => () => f(a, b);

let execute = prepare(add, 1, 2);
let result = execute();

console.log(result); // 3