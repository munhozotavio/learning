function decoratorGetAndSet(enable: boolean) {
  return (target: unknown, propertKey: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = enable;
  }

}


class Login{
  constructor (private _user: string,
    private _password: string) {}

  @decoratorGetAndSet(true)
  get user(){
    return this._user;
  }

  @decoratorGetAndSet(false)
  get password() {
    return this._password;
  }
}


const login = new Login("admin", "admin");
console.log(login);


for (let key in login) {
  console.log(key);
  console.log(login[key]);
}
