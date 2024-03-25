let superset: [string, number, string];

superset = ["JavaScript", 2010, "TypeScript"];

//superset.push("ES6"); // ?
// superset = ["A", 1, "B", 2]; // Erro

console.log(superset)

// is tuple useful?

//------------------------ OBEJCT ------------------------

let serverConnection:object = {
  server: "http://localhost",
  port: 8080,
  status: "running"
}

// object type doesn`t validate the properties, just the type of ther var so
// serverConnection = "test" error
// serverConnection = {test:"test"} -> it works

// ----------------------- ENUM ------------------------

enum Permission {
  ADMIN,
  STAFF,
  GUEST
}

console.log(Permission.ADMIN)
console.log(Permission.STAFF)
console.log(Permission.GUEST)

enum Counter {
  START = 1,
  MIDDLE,
  END
}

console.log('---------')
console.log(Counter.START);
console.log(Counter.MIDDLE);
console.log(Counter.END);

