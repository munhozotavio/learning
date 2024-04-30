class Order{
  constructor(private product: string, protected totalValue: number, public qty: number){}
}

const myOrder = new Order("Laptop", 5000, 1);

console.log(myOrder.qty);
