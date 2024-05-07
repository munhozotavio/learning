interface IBasics{
  readonly id: number;
  readonly created_at: Date;
  readonly updated_at: Date;
}

interface IPersonData extends IBasics{
  name: string;
}

interface ICategoryData extends IBasics{
  catName: string;
}

class ModelRegistration<T> {

  create(data: T): T{
    console.log('Added data to DB');

    return data;
  }

  select(id: number): T {
    console.log('reading data from id ' + id);

    return {} as T;
  }

  edit(id: number, newData: T): T{
    console.log('editing data from id ' + id);

    return newData;
  }

  delete(id: number): boolean{
    console.log(`Removed data where id = ${id}`);

    return true;
  }
}

class PersonModel extends ModelRegistration<IPersonData>{}

class CategoryModel extends ModelRegistration<ICategoryData>{}

const joaquin = new PersonModel();

console.log(joaquin.create({
  id: 1,
  name: 'Joa',
  created_at: new Date(),
  updated_at: new Date()
}));

const filler = new CategoryModel();

console.log(filler.edit(2, {
  id: 2,
  catName: 'Filler Arc',
  created_at: new Date(),
  updated_at: new Date()
}))
