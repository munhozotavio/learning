interface IProcessing<TypeI>{ // Should be <T>, but just showing that any name can be used
  value: TypeI;
  process(arg: TypeI): TypeI;
}

const typeString: IProcessing<string> = {
  value: "generic text",
  process(arg: string): string {
    return arg.toUpperCase();
  }
}

console.log(typeString.value);
console.log(typeString.process("generic text 2"));

const typeNumber: IProcessing<number> = {
  value: 1,
  process(v: number): number {
    return v * v;
  }
}

console.log(typeNumber.value);
console.log(typeNumber.process(2));

