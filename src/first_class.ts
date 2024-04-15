class Person {
  fullname: string;
  age: number;
  birthday?: number;

  constructor(fullname:string, age: number, birthday?: number){
    this.fullname = fullname;
    this.birthday = birthday;
    this.age = age;
  }

  calculateIMC(height: number, weight: number): number {
    return weight / height;
  }

  toString(): string {
    return `${this.fullname}: ${this.age} years old`
  }
}

const otavio = new Person("Otavio", 24);

console.log(`${otavio}`);
console.log(otavio.calculateIMC(180, 80))

