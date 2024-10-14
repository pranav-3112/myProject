// const iterable = 'OMSHANTIOM';

// for (const value of iterable) {
//   console.log(value);
// }
// "b"
// "o"
// "o"

// const iterable = [1000, 20000, 30000];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3