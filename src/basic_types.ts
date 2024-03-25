let weekDay: string;
let year: number;
let month: string | number; //This is a union type


year = +"2024"; //This works because the + operator is used to convert a string to a number

// ------ BOOLEAN ------- //

let admin:boolean;

admin = false;
//admin = 0; This will throw an error because 0 is not a boolean
admin = Boolean(1);

console.log(admin);

// ------- ARRAY ------- //
const movieCategory: string[] = ["Action", "Comedy", "Drama", "Horror"];

movieCategory.push("Thriller");
//movieCategory.push(9);

const movieYear: Array<number | string> = [2020, 2021, 2022, "2023"];

movieYear.push(2024);
movieYear.push("2025");

const movieDate: (string | number)[] = ["2020-01-01",2023]; //Other option to represent an array of strings or numbers
