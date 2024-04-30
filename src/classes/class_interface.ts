interface INotify {
  send(user: IUserN): boolean;
}

interface IEmailN {
  name: string;
  provider: string;
}

interface IUserN {
  name: string;
  email: string;
  phone: string;
  isAndroid?: boolean;
}

abstract class Notify implements INotify {
  abstract send(user: IUserN): boolean;
}


class EmailNotification extends Notify implements IEmailN {
  name: string;
  provider: string;

  constructor(name: string, provider: string) {
    super()
    this.name = name;
    this.provider = provider;
  }

  send(user: IUserN): boolean {
    console.log('E-mail sended to ' + user.email);
    return true;
  }
}


