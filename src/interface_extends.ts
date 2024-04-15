interface IModel {
  id: number;
  created_at: Date;
  updated_at: Date;
}

interface IPerson extends IModel{
  name: string;
  age?: number;
}

interface IUser extends IPerson{
  mail: string;
  password: string;
}

const user1: IUser = {
  id: 1,
  created_at: new Date(),
  updated_at: new Date(),
  mail: "mail@mail.com",
  name: "John",
  password: "12345",
}

console.log(user1);



