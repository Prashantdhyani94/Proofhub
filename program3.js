// 3. Write a command to find if a given number is even/odd without a conditional statement?

let n = parseInt(prompt("Enter the number you want to check: "));
const toDisplay = isEven(n) ? "EVEN" : "ODD";
function isEven(n) {
  return n % 2 == 0;
}
console.log(toDisplay);
