/*1. Write a program to print a series with a 'while' loop.
 0,1,1,2,3,5,8,13,21,..................*/
const number = parseInt(prompt('Enter the number of terms: '));
let a=0,b=1,c,count=2;
console.log(a+"\n"+b);
while(number>count){
    console.log(c=a+b)
    a=b;
    b=c;
    count=count+1
}