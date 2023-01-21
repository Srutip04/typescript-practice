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

let person: {
    name: string;
    age: number;
};

person = {
    name: 'max',
    age: 34
}

let people: {
    name: string;
    age: number;
}[];

//Type inference
//dont have to specify the type
let course = "React";

//union types
//specify multiple types

let c: string | boolean ;