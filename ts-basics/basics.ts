//primitives: number,string,boolean
//more complex types: arrays,objects
//function types,parameters

//Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isIns : boolean;
isIns =true;

//more complex types

let hobbies: string[];
hobbies = ['sports','cooking',"basketball"];

//type alias
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'max',
    age: 34
}

let people: Person[];

//Type inference
//dont have to specify the type
let course = "React";

//union types
//specify multiple types

let c: string | boolean ;

//function & types

function add(a: number,b: number){
    return a + b;
}

function print(value: any){
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[],value: T){
    const newArr = [value,...array];
    return newArr;
}

const demoArr = [1,2,3];

const updatedArr = insertAtBeginning(demoArr,-1); //[-1,1,2,3]
const stringArr = insertAtBeginning(['a','b','c'],'d')


