 function CountChar(str){
    let store={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char!==" "){
            store[char]=(store[char]||0)+1
        }
    }
    return store;
}

console.log("CountChar",CountChar("hello jui here"))

export default CountChar;