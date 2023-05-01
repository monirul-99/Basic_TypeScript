// Normal Functions
function add(num1 : number, num2: number): number{
    return num1 + num2
}

// Arrow Functions
const addArrow = (num1 : number, num2:number): number => num1 + num2

const arr = [3,5,7,3]
const newArray = arr.map((element: number) =>element + element)

const person: {
    name: string,
    balance : number,
    addBalance(newMoney: number) : void
} = {
    name : "Monirul Islam",
    balance : 23,
    addBalance(newMoney: number){
        console.log(`My Balance is ${this.balance + newMoney}`)
    }
}