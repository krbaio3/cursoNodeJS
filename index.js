const slowAdd = (a, b) => {
  for (let index = 0; index < 999999999; index++) {}
  return a + b;
}

const a= slowAdd (6,9);
const b = slowAdd (1,42);
const c = slowAdd (23,42);
const d = slowAdd (5,9);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
