import { decoratorMethod } from ".";

class HandleMessage{
  @decoratorMethod
  printMessage(...messages: string[]): string[]{
    return messages;
  }
}

const inst = new HandleMessage();

console.log(inst.printMessage("Hello", "world", "ts"));
