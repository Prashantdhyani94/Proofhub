// 2. Write a program to get a sum of even and odd numbers between 1-100.

let even = (odd = 0);

for (let i = 2; i < 100; i++) {
  if (i % 2 == 0) {
    even = even + i;
  } else {
    odd = odd + i;
  }
}
console.log(
  "The sum of even no between 1 to 100 is " +
    even +
    ",the sum of odd no between 1 to 100 is " +
    odd
);
