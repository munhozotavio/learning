import applyMixins  from "./applyMixins";

class Product2 {
  sell(qty: number): string{
    return `Selling ${qty} products`;
  }

  purchase(qty: number): string{
    return `Purchasing ${qty} products`;
  }
}


class Furniture{
  sit(): string{
    return 'Sitting on furniture';
  }

  push(meters: number): string {
    return `Pushing for ${meters}m`;
  }
}


class Sofa{
  constructor(public color: string){}
}

interface Sofa extends Product2, Furniture{ }

applyMixins(Sofa, [Product2, Furniture]);

const product = new Sofa('white');

console.log(product.sell(10));
console.log(product.sit());
console.log(product.color);
