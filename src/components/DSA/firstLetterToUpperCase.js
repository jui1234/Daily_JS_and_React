const firstLetterToUpperCase=(str)=>{
     let word= str.split(" ")
    //  return str.slice(1)
     for(let i=0;i<=word.length-1;i++){
         word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
         
     }
     return word.join(" ")
}

console.log("firstLetterToUpperCase",firstLetterToUpperCase("hello this is jui"))

export default firstLetterToUpperCase;