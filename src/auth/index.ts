namespace Auth {
  interface IUser {
    name: string;
    id: number;
  }

  interface IRegistration {
    email: string;
    password: string;
  }

  export class LoginUser {

    returnUser(user: IUser): string {
      return ('Logged in as ' + user.name);
    }

    returnRegister (user: IRegistration): string {
      return ('Registered as ' + user.email);
    }

  }

  export class RecoverAccount {

    recoverUser(user: IUser): string {
      return ('Sending recovery email to user');
    }

    recoverPassword(user: IRegistration): string {
      return ('Sending recovery email to email ' );
    }

  }


}
