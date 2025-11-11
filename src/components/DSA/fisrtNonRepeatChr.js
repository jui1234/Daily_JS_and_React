// your code goes here
const nonRepeate=(str)=>{
    for(let i=0;i<str.length;i++){
    let isunique=false;
        for(let j=0;j<str.length;j++){
            if(i!==j && str[i]===str[j]){
                isunique=false;
                break;
            }
            else{
                isunique=true;
            }
        
        }
        if(isunique) return str[i];
    }
        return null;
}

console.log(nonRepeate("abcuddabcf"))

export default nonRepeate;