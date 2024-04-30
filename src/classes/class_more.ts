class CPermission{
  constructor(private _name: string, private _level: number){}

  get name(){
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const permission1 = new CPermission("Admin", 1);

console.log(permission1.name);


// --------------------------------------- STATIC

import { IDatabase } from "../interfaces/Database";

//export = class Database { node
export class Database {

  static LOCAL = "127.0.0.1";
  static TYPE_MYSQL = `mysql`;
  static TYPE_POSTGRES = `postgres`;

  constructor (
    private ip: string,
    private user: string,
    private password: string,
    private type: string
  ) {}

  get getIp(){
    return this.ip;
  }

  static factory(params: IDatabase) {
    if (![Database.TYPE_MYSQL, Database.TYPE_POSTGRES].includes(params.type)) return ("Invalid type");

    return new Database(params.ip, params.user, params.password, params.type);
  }

}


const db = Database.factory({
  ip: Database.LOCAL,
  user: "root",
  password: "12345",
  type: Database.TYPE_MYSQL
});

console.log(db);
