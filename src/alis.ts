type CrushType = {
    name : string,
    age? : number,
    profession: string,
    address: string
}

const crushOne : CrushType = {
    name : "Sadia Islam",
    age : 15,
    profession: "Student",
    address: "Mokmolpur"
}

const crushTwo : CrushType  = {
    name : "Partner",
    profession: "Developer",
    address: "USA"
}


type OperationType = (x: number, y:number) => number
const calculate = (number1 : number, number2: number, operation : OperationType) => {
 return operation(number1, number2)
}

calculate(23, 45, (x, y) => x + y)