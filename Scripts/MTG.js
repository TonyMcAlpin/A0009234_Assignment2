// JavaScript source code
let yourNum = Number(prompt("Enter a number to display a multiplication table for your number from 1 to 10"));

for (let i = 1; i <= 10; i = i+1)
{
    let nums = i * yourNum;
    alert(yourNum + " x " + i + " = " + nums);
}