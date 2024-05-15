import { decoratorAttribute } from ".";

class Animal {

  @decoratorAttribute
  animalName: string;

  constructor(animalName: string){
    this.animalName = animalName;
  }
}

const dog = new Animal('Pluto');
console.log(dog.animalName);



