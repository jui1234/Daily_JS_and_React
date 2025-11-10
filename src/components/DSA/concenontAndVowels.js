// const consonantsAndVowels=(str)=>{
//     let vowels='AEIOUaeiou';
//     let vowelsCount=0;
//     let consonantsCounts=0;
//     for(let char of str){
        
//     if(/[a-zA-Z]/.test(char)){
//         if(vowels.includes(char)){
//             vowelsCount++;
//         }
//         else{
//             consonantsCounts++;
//         }
//     }
//     // consonantsCounts++;
//     }
//     return {vowels:vowelsCount,consonants:consonantsCounts}
// }

// console.log(consonantsAndVowels("hello world"))


const consonantsAndVowels=(str)=>{
    let vowels="AEIOUaeiou";
    let vowelsCount=0;
    let consonantsCounts=0;
    
    
    for(let i=0; i<str.length;i++){
        if(str[i]!==" "){
            let isVowels=false;
            for(j=0;j<vowels.length;j++){
                if(str[i]===vowels[j]){
                 vowelsCount++;
                 isVowels=true
                 break;
                }
                
            }
            
            if(!isVowels && ((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')))
            {
                consonantsCounts++;
            }
            
        }
    }
    
    return {Vowels:vowelsCount,Consonants:consonantsCounts}
}

console.log(consonantsAndVowels("hello world"))

export default consonantsAndVowels;