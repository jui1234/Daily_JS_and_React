export default function InterfaceAndType() {

interface Person{//interface is used to define the structure of object 
    name:string;
    age:number;
}

interface Person{//we can merge interface once declared
    salary:number;
}

interface Employee extends Person{
    company:string;
}

interface Animal{
    dogname:string;
    whthedo():void;
}


class Dog implements Animal{
    dogname: string;

    constructor() {
        this.dogname = 'roxy';
    }

    whthedo(){
        console.log("bark");
    }
}

const User1:Employee={
    name:'jui',
    age:26,
    salary:6500000,
    company:'Google'
}

type User={//type is also used to define the structure of object but cannot be merged once declared
    name:string;
    salary:number;
}

type PersonTYpe=User &{
    age:number;
}

const User2:PersonTYpe={
    name:'jui',
    age:26,
    salary:6500000
}

const Status:"sucess"|"failed"="sucess";
}