/// <reference path="./auth/index.ts"/>

//to compile this file, run tsc ./src/auth.ts --outFile ./dist/auth.js

const newUser = new Auth.LoginUser();

const user = newUser.returnUser({name: "Jhon", id: 1});

console.log(user);

// 
