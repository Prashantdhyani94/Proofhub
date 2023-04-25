/* 5. Write a program in javascript for the following:-
a. declare array

b. add item
c. delete an item
d. add a particular index
e. delete from a particular index */

const cars = ["Maruti", "Tata", "Mahindra", "Hyundai"];
cars.push("BMW");
console.log(cars);
cars.pop();
console.log(cars);
cars.splice(2, 0, "Honda");
console.log(cars);
delete cars[3];
console.log(cars);
