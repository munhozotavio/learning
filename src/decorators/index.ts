//utils
export function debug(targetClass: unknown){
  console.log("Class was created");
}

export function log(constructor: any){
  return class extends constructor {
    created_at = new Date();
  }
}

export function decoratorMethod(target: unknown, propertKey: string, descriptor: PropertyDescriptor){
  descriptor.value = (...args: unknown[]) => {
    return args.map(arg => (<string>arg).toUpperCase());
  }
}

export function decoratorAttribute(target: unknown, propertKey: string){
  const newKey = `_${propertKey}`;
  console.log(target);
  Object.defineProperty(target, propertKey, {
    get(){
      return this[newKey].toUpperCase();
    },

    set(newValue){
      this[newKey] = newValue;
    }
  })
}
