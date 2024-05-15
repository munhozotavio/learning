import { debug, log } from ".";

@debug
class FirstClass {
  constructor () {}
}

@log
class SecondClass {
  constructor () {}
}

console.log(new SecondClass())
