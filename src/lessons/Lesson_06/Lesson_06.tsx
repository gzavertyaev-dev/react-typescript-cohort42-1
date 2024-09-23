import "./styles.css";

function Lesson_06() {
  // 1 ТИП: string - строковый("", '', ``);
  let userFullName: string = "John Johnson";
  userFullName = "Johny Depp";
  // userFullName = 100; // будет ошибка!!!

  let hello = `Hello, ${userFullName}`; // Если мы явно не прописываем тип данных переменной, которую объявляем, то тип назначается автоматически. Тип зависит от того какой первый тип данных попал в этиу переменную
  console.log(hello);
  // hello = 100; // будет ошибка!!!
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 2 ТИП: number - числовой
  let number1: number = 100;
  // number = "200"; // будет ошибка!!!
  number1 = 35.365;

  let number2: number = number1 / 0;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 3 ТИП: boolean = буленовский
  let isAdmin: boolean = true;
  isAdmin = false;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 4 ТИП - массивы
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);

  // animals.push(100); // будт ошибка

  const numbers: number[] = [1, 2, 3, 4, 5];

  // 5 - tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];

  userArray.push("100");
  console.log(userArray);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 6 - functions
  // 6.1 ф-я которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  sayHi("Brat");

  const makeAlert: (message: string) => void = (message) => {
    alert(message);
  };

  // 6.2 ф-я которая что-то возвращает
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  let result: number = sum(5, 5);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  interface Admin {
    isAdmin: boolean;
  }

  interface UserAnimals {
    pet?: string;
  }

  interface User<CarType> extends Admin, UserAnimals {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    salary?: number;
    car: CarType;
  }

  // мы можем дописывать со-ва в интрефейсе
  interface User<CarType> {
    isFamily: boolean;
  }

  const user1: User<string[]> = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: false,
    isFamily: true,
    // salary: 3000,
    car: ["Porshe 911", "Audi R8"],
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 8. undefiened
  let userData: undefined = undefined;

  // 9. null
  let emptyVariable: null = null;

  // 10. any
  let someVariable: any = () => {};
  someVariable = "Some string";

  // 11. type
  type Images = undefined | string[];

  let images: Images = undefined;
  images = ["url1", "url2", "url3"];

  type GlobalAnimalProps = {
    isAnimal: boolean;
  };

  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
  };

  type GlobalAnimal = GlobalAnimalProps & Animal;

  const animal: GlobalAnimal = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  // 12. Generics
  type ArrayGeneration<Type> = Type[];

  // const languages: string[] = ["English", "Russian", "Spanish"];
  // const prices: number[] = [1000, 500, 400];
  const languages: ArrayGeneration<string> = ["English", "Russian", "Spanish"];
  const prices: ArrayGeneration<number> = [1000, 500, 400];

  return <div className="lesson-06-wrapper">Lesson 06</div>;
}

export default Lesson_06;
