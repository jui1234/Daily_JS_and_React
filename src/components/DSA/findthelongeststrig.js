const findlongestWord=(str)=>{
    let longestWord="";
    let start=0;
    for(let i=0;i<=str.length;i++){
        if(str[i]===" "|| i===str.length){
            let currentword=str.slice(start,i);
            if(currentword.length>longestWord.length){
                longestWord=currentword;
            }
        start=i+1;
        }
    }
    return longestWord;
}

console.log("findlongestWord",findlongestWord("hello jui here as a developer"))

export default findlongestWord;