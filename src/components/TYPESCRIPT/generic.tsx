function Work<T>(value:T){
    return value;
}

interface Test<T>{
    name:T;
}

const result:Test<string>={name:"jui"}

console.log("result",result)