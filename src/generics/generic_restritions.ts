interface ILength{
  length: number;
}

function showTotalLength<T extends ILength>(data: T): void {
  console.log(data.length);
}

showTotalLength([1,2,3]);
showTotalLength("Marcos");
//showTotalLength(5);

