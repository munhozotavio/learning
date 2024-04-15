class Register {
  email: string;
  password: string;

  constructor (email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

class Client extends Register{
  fullname: string;
  age: number;

  constructor(fullname:string, age: number, email: string, password: string){
    super(email, password);
    this.fullname = fullname;
    this.age = age;
  }
}

const userOtavio = new Client("Otavio", 24,"mail@mail.com", "12345");


console.log(userOtavio);
