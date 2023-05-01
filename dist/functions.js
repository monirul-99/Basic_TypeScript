"use strict";
// Normal Functions
function add(num1, num2 = 10) {
    return num1 + num2;
}
// Arrow Functions
const addArrow = (num1, num2) => num1 + num2;
const arr = [3, 5, 7, 3];
const newArray = arr.map((element) => element + element);
const person = {
    name: "Monirul Islam",
    balance: 23,
    addBalance(newMoney) {
        console.log(`My Balance is ${this.balance + newMoney}`);
    }
};
//spread operator
const myFriends = ["Nothing", "Something", "New Thing"];
const newFriends = ["New friends", "New Ahead"];
myFriends.push(...newFriends);
