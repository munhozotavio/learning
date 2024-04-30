class Car2 {
  public color: string; // public is the default, so it can be omitted

  constructor (color:string) {
    this.color = color;
  }

  public tryToOpenDoor():boolean {
    return false;
  }
}

class Bus {

  public countSeats(): number {
    return this.seats();
  }

  protected seats(): number {
    return 40;
  }
}

const myCar = new Car2("red");

myCar.color = "silver";

console.log(myCar.color);
console.log(myCar.tryToOpenDoor());

const myBus = new Bus();
// console.log(myBus.seats()); // Error: Property 'seats' is protected and only accessible within class 'Bus' and its subclasses.
console.log(myBus.countSeats());


// ---------------------------------------

class Bank {
  private safeQty: number = 10000;

  private withdrawMoney(value: number): number | string{
    if (this.safeQty >= value) {
      this.safeQty -= value;
      return this.safeQty;
    }
    return "Insufficient funds";
  }

  protected withdrawFromTeller(value: number): number | string {
    return this.withdrawMoney(value);
  }

  withdrawFromAtm(value: number): number | string {
    return this.withdrawMoney(value);
  }
}

class Bank24 extends Bank{
  withdraw(value: number): number | string{
    return this.withdrawFromTeller(value);

    //  return this.withdrawMoney(value);
  }
}
