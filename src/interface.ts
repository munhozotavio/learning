// --------------------- BASIC ---------------------

interface IAddress {
  street: string;
  address: string;
  num: number;
  city: string;
  zip: string;
}

let address: IAddress

address = {
  street: "Rua das Flores",
  address: "Casa",
  num: 123,
  city: "São Paulo",
  zip: "12345-123"
}

// --------------------- OPTIONAL PARAMETER ---------------------

interface IProductsOptional {
  name: string;
  price: number;
  description?: string;
}

const almonds: IProductsOptional = {
  name: "Chocolate almonds",
  price: 10.0
}

const peanuts: IProductsOptional = {
  name: "Salted peanuts",
  price: 8.0,
  description: "Salted peanuts"
}

interface ICourse {
  readonly name: string;
  duration: number;
  educator: string;
}

// --------------------- READONLY ---------------------

const mc102:ICourse = {
  name: "Introduction to Programming",
  duration: 120,
  educator: "Ricardo"
}

// mc102.name = "Introduction to Programming with Python" // Error
mc102.duration = 100;
console.log(mc102);

// --------------------- FUNCTION WITH INTERFACES ---------------------

// Basic function with interface
interface ISum {
  (num1: number, num2: number): number;
}

let basicSum: ISum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
  //return String(firstNumber + secondNumber);
}

interface IOperation {
  sum(a:number, b:number):number;
  sub(a:number, b:number):number;
  mult(a:number, b:number):number;
  div(a:number, b:number):number;
}

let calculator: IOperation;

function multiplication (num1: number, num2: number): number {
  return num1 * num2;
}

const div = (dividend: number, divider: number):number => dividend/divider;

calculator = {
  sum: (num1, num2) => num1 + num2, //The parameters and the function types are inherited from the interface
  sub: function(num1, num2){return num1 - num2}, //The same here
  mult: multiplication, //Here it doesn`t work (so you have to declare the types)
  div
}

console.log(calculator.sum(1,2))
