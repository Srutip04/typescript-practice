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